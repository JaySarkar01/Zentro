"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram } from "lucide-react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <div className="min-h-[calc(100vh-120px)] py-24 px-4 md:px-8 bg-white flex items-center justify-center mt-10">
  <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-start border border-zinc-300 p-6 md:p-10 rounded-lg md:shadow-lg bg-gray-50">
    {/* Left & Right columns stay the same */}

        <div className="space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact Us</h1>
            <p className="text-lg text-gray-500">Any question? We would be happy to help you!</p>
          </div>

          <div className="space-y-5 pt-4">

            {/* Email */}
            
              <div className="flex items-center p-4 bg-white rounded-md border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="mr-4">
                <Mail className="h-5 w-5" />
              </div>
              <span>info@parvatiandsons.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center p-4 bg-gray-900 rounded-md text-white">
              <div className="mr-4">
                <Phone className="h-5 w-5 text-gray-100" />
              </div>
              <span className="text-gray-100">+91-9837994101</span>
            </div>

            

            {/* Address */}
            <div className="flex items-center p-4 bg-white rounded-md border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="mr-4">
                <MapPin className="h-5 w-5 text-gray-500" />
              </div>
              <span className="text-gray-700">Parvati And Sons
First floor, Hotel Pearl Inn, Behind Bada Gurudwara, Gole
Market, Rudrapur, 263153
Dineshpur, Uttarakhand, India - 263160
</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 pt-6 md:pt-25 lg:pt-27">
            <a href="#" className="p-3 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="p-3 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="p-3 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6 m-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-gray-700 font-medium">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-gray-700 font-medium">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="youremail@email.com"
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-gray-700 font-medium">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+9876543210"
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-4 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}