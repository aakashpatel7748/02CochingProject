import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { recipcontext } from "../context/RecipContext"
import { nanoid } from "nanoid"
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()
  const { data, setData } = useContext(recipcontext)


  const submit = (user) => {
    user.id = nanoid();
    const updatedData = [...data, user];
    setData(updatedData)
    window.localStorage.setItem("recipes", JSON.stringify(updatedData));
    toast.success("New recipe created!");
    reset()
    navigate(-1)
  }
  return (
    <div className='w-screen  text-black mb-6 flex justify-center px-3 mt-3'>
      <form
        onSubmit={handleSubmit(submit)}
        className=' w-[35%] py-3 flex flex-col  bg-gray-500 ml-4  rounded-lg'
      >
        <h1 className='text-center text-2xl font-bold py-3  text-white'>Recipe Create Form</h1>
        <input
          {...register("image")}
          className='py-2 px-4 m-2 block rounded-md outline-none'
          type="url"
          placeholder='Imgurl url'
        />
        <input
          className="py-2 px-4 m-2 block rounded-md outline-none"
          {...register("title")}
          type="text"
          placeholder="Title"
        />
        <input
          className="py-2 px-4 m-2 block rounded-md outline-none"
          {...register("chef")}
          type="text"
          placeholder="Chef"
        />

        <textarea
          className="py-2 px-4 m-2 block rounded-md outline-none"
          {...register("desc")}
          placeholder="recipe description..."
        ></textarea>

        <textarea
          className="py-2 px-4 m-2 block rounded-md outline-none"
          {...register("ingr")}
          placeholder="recipe ingredients, seperated by comma"
        ></textarea>
        <textarea
          className="py-2 px-4 m-2 block rounded-md outline-none"
          {...register("inst")}
          placeholder="recipe instructions, seperated by comma"
        ></textarea>

        <select
          className="py-2 px-4 m-2 block rounded-md outline-none"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button
         className="bg-gray-600 font-medium text-white py-2 ml-3 mr-3 rounded">
          Create Recipe
        </button>

      </form>

    </div>
  )
}

export default Create