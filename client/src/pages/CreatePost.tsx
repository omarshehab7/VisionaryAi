import React,{useState} from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import FormField from '../components/FormField'
import Loader from '../components/Loader'

function handleSubmit(){

}

function handleChange(){}

function handleSurpriseMe(){

}

export default function CreatePost() {
  const navigate=useNavigate()
  const [form,setForm]=useState<{name:string, prompt:string, photo:string}>({
    name:'',
    prompt:'',
    photo:''
  })
  const [generatingImg,setGeneratingImg]=useState<boolean>(false)
  const [loading,setLoading]=useState<boolean>(false)
  return (
    <section className="max-w-7xl mx-auto">
      <div>
      <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
      <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>Create imaginative and visually stunning images through VisionaryAI and share them with the community</p>
    </div>
    <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
          labelName="Your name" 
          type="text" 
          name="name" 
          placeholder="John Doe" 
          value={form.name} 
          handleChange={handleChange}/>
          <FormField 
          labelName="Prompt" 
          type="text" 
          name="prompt" 
          placeholder='teddy bears shopping for groceries in Japan, ukiyo-e' 
          value={form.prompt} 
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
          />
        </div>
    </form>
    </section>
  )
}