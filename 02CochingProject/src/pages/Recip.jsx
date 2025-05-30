import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipcontext } from '../context/RecipContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaHeart } from "react-icons/fa";
const Recip = () => {
  const navigate = useNavigate()
  const { data, setData, favourite, setfavourite } = useContext(recipcontext)
  const { id } = useParams();
  const recipe = data.find((r) => r.id == id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: recipe.image,
      title: recipe.title,
      chef: recipe.chef,
      desc: recipe.desc,
      ingr: recipe.ingr,
      inst: recipe.inst,
    }
  })


  const submit = (updateRecip) => {
    const index = data.findIndex((recip) => recip.id == id)
    const copyuser = [...data]
    copyuser[index] = { ...recipe, ...updateRecip }
    setData(copyuser)
    window.localStorage.setItem("recipes", JSON.stringify(copyuser));
    toast.success("Recip update successfull")
    reset()

  }

  const DeleteHanler = () => {
    const filterdata = data.filter((val) => val.id !== id)
    setData(filterdata)
      window.localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.success("Recipe Deleted");
    navigate("/recipes");
  }

  const favouriteHandler = () => {
    let copyfavourit = [...favourite]
    copyfavourit.push(recipe)
    setfavourite(copyfavourit)

    window.localStorage.setItem("favroite", JSON.stringify(copyfavourit));

  }

  const UnfavouriteHandler = () => {
    const filterfav = favourite.filter((fav) => fav.id != id)
    setfavourite(filterfav)
    window.localStorage.setItem(
      "favroite",
      JSON.stringify(filterfav)
    );
  }

  return recipe ? (
    <div className='flex w-screen justify-between mt-3'>

      <div className='p-3 bg-gray-300 mr-3 mb-3 block w-[23vw] h-[20%] shadow rounded overflow-hidden'>

        <h1 className="p-1 mt-3 text-2xl font-black">{recipe.title}</h1>
        <img className="w-full h-[30vh] object-cover" src={recipe.image} alt="image not found" />
        <small className="p-1 text-red-400">{recipe.chef}</small>
        <p className="mt-2 p-1">
          {recipe.desc.slice(0, 100)}...
          <small className="text-blue-400">more</small>
        </p>
        {favourite.find((fav) => fav.id == recipe.id) ? (
          <button
            onClick={UnfavouriteHandler}
            className='text-xl text-blue-600'
          >
            <FaHeart />
          </button>
        ) : (

          <button
            onClick={favouriteHandler}
            className='text-xl text-red-500'
          >
            <FaHeart />
          </button>
        )}

      </div>

      <div className='w-[30%] text-black mb-6'>
        <form
          onSubmit={handleSubmit(submit)}
          className=' w-[90%] py-3 flex flex-col  bg-gray-500 ml-4  rounded-lg'
        >
          <h1 className='text-center text-2xl think'>form</h1>
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


          <button
            type="submit"
            className="bg-gray-400 text-white px-4 mr-4 ml-4 py-2 rounded">
            Update Recipe
          </button>
          <button
            type="button"
            onClick={DeleteHanler}
            className="bg-red-500 text-white mt-2 mr-4 ml-4 px-4 py-2 rounded">
            Delete Recipe
          </button>

        </form>
      </div>
    </div>
  ) : (
    "Loding"
  )
}

export default Recip
