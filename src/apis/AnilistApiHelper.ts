interface AnilistQuizData {
  title: {
    english: string;
    romaji: string;
    native: string;
  };
  coverImage: {
    extraLarge: string;
    large: string;
  };
  type: string;
  description: string;
  tag: {
    name: string;
    category: string;
  }[];
}

interface AnilistDataCore {
  title: {
    english: string;
    romaji: string;
    native: string;
  };
  coverImage: {
    extraLarge: string;
    large: string;
  };
  type: string;
  description: string;
  tags: {
    name: string;
    category: string;
  }[];
}


interface AnilistResponse extends AnilistDataCore {
  data: AnilistDataCore | null;
  errors?: {
    message: string;
    status: number;
    locations?: {
      line: number;
      column: number;
    }[];
    validation?: Record<string, string[]>;
  }[];
}
export async function suggestionSearchByName(mediaTitle: string): Promise<AnilistQuizData> {
  const query = `
  query ($search: String) {
    Media (search: $search) {
      title {
        english
        romaji
        native
      }
      coverImage {
        extraLarge
        large
      }
      type
      description
      tags {
        name
        category
      }
    }
  }`;

  const searchParameter = {
    search: mediaTitle,
  };

  const url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: searchParameter,
      }),
    };


  try {
    const response = await fetch(url, options);
    const data = await handleResponse(response);
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

async function handleResponse(response: Response): Promise<any> {
  if (response.ok) {
    const json = await response.json();
    return await handleData(json.data);
  }
  const errorInfo = await response.json();
  throw new Error(`Request failed with status ${response.status}: ${errorInfo.message}`);

}

async function handleData(data: AnilistResponse): Promise<AnilistQuizData> {
  if (data.errors) {
    handleError(data.errors);
  }
  // console.log(data.media, data.media.tags);
  // const demographicTag = extractDemographicTags(data.media.tags ?? []);
  console.log(data, data);
  const quizData: AnilistQuizData = {
    title: {
      english: data.title.english,
      romaji: data.title.romaji,
      native: data.title.native,
    },
    coverImage: {
      extraLarge: data.coverImage.extraLarge,
      large: data.coverImage.large,
    },
    type: data.type,
    description: data.description,
    tag: data.tags,
  };

  return quizData;
}

function handleError(error: any): void {
  console.error(error);
}

/** For the purpose of this quiz we are looking for the demographic tag from the data
 * so filtering to only have and save that information
 * @param tags - array of tags with name and category information
 * @returns - demographic category names or empty array if not there
 */
function extractDemographicTags(tags: { name: string, category: string; }[]): string {
  const demographicTag = tags.find(tag => tag.category.toLowerCase() === 'demographic');
  return demographicTag ? demographicTag.name : '';
}