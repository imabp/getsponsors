import React from 'react'
import SbEditable from 'storyblok-react'

const SponsorProfile = ({ blok }) => {
    return (
        <SbEditable className="text-sm" content={blok}>
            <div className="text-sm max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 text-sm">
                <div className="flex rounded-sm justify-center md:justify-end -mt-16">
                    <img className="rounded w-30 h-20 object-cover border-1 border-indigo-500" alt={blok.image.alt} src={blok.image.filename} />
                </div>
                <div className="text-2xl">
                    {blok.name}
                </div>
                    <p className="mt-2 text-gray-600">{blok.desc}</p>
                <div class="flex justify-start mt-4">
                <a href={blok.link} class="text-xl font-medium text-indigo-500">Website</a><br/>

                </div>
                <a href={blok.link} class="text-xl font-medium text-indigo-500">Point of Contact</a>

            </div>

        </SbEditable>
    )
}

export default SponsorProfile

