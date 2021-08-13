import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}
export const About = () => {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
            )
            .then(data => setAuthor(data[0]))
            .catch(console.error);
    }, []);
    if (!author) {
        return <div>Loading...</div>;
    }
    return (
        <main className="relative">
            <img
                src={
                    "https://cdn.shopify.com/s/files/1/0160/6394/products/USA2839BW_1024x1024.jpeg?v=1502454120"
                }
                alt={"FCbarcelona"}
                className="absolute w-full object-cover bg_img_height"
            />
            <div className="p-10 lg:pt-28 container mx-auto relative ">
                <section className="bg-black rounded-lg shadow-2xl lg:flex p-20">
                    <img
                        src={urlFor(author.authorImage).url()}
                        alt={author.name}
                        className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="text-6xl font-amatic text-gray-300 mb-4 ">
                            Hey there. I'm{" "}
                            <span className="text-gray-100">{author.name}</span>
                        </h1>
                        <div className="text-white">
                            <BlockContent
                                blocks={author.bio}
                                projectId="wp1pyf72"
                                dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};
