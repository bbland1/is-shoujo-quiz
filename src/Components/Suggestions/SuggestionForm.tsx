import React from 'react';
import { useForm } from 'react-hook-form';

export default function SuggestForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input type="text" placeholder="Suggestion" {...register} />
      <div aria-label='Media Type'>
        <label htmlFor='anime'>
          Anime
          <input {...register("Media Type")} type="radio" value="Anime" />
        </label>
        <label htmlFor='manga'>
          Manga
          <input {...register("Media Type")} type="radio" value=" Manga" />
        </label>
        <input {...register("Media Type")} type="radio" value=" Both" />
      </div>

      <input type="submit" />
    </form>
  );
}