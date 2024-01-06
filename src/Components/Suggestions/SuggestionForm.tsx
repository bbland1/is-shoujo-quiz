import React from 'react';
import { useForm } from 'react-hook-form';
import { suggestionSearchByName } from '../../apis/AnilistApiHelper';

export default function SuggestForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data:any) => {
    try {
      const result = await suggestionSearchByName(data.suggestion);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

<input type="text" placeholder="Suggestion" {...register('suggestion', { required: true })} />
      {errors.suggestion && <p>This field is required</p>}
      {/* <div aria-label='Media Type'>
        <label htmlFor='anime'>
          Anime
          <input {...register("Media Type")} type="radio" value="Anime" />
        </label>
        <label htmlFor='manga'>
          Manga
          <input {...register("Media Type")} type="radio" value=" Manga" />
        </label>
      </div> */}

      <input type="submit" />
    </form>
  );
}