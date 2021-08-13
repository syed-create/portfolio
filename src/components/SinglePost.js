import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}
export const SinglePost = () => {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();
    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`
            )
            .then(data => setSinglePost(
                data[0]))
            .catch(console.error);
    }, [slug]);
    if (!singlePost) {
        return <div>Loading...</div>;
    }
    return (
        <main className="bg-gray-200 bg_img_height p-12">
            <article className="conatiner shadow-lg mx-auto bg-white rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-white bg-opacity-75 rounder p-12">
                            <h1 className="font-amatic text-3xl lg:text-6xl mb-4">
                                {singlePost.title}
                            </h1>
                            <div className="flex justify-center text-gray-800">
                                <img
                                    src={urlFor(singlePost.authorImage).url()}
                                    alt={singlePost.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <p className="font-amatic flex items-center pl-2 text-2xl">
                                    {singlePost.name}
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        src={singlePost.mainImage.asset.url}
                        alt={singlePost.title}
                        className="w-full object-cover rounded-t"
                        style={{ height: "400px" }}
                    />
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 max-w-full">
                    <BlockContent
                        blocks={singlePost.body}
                        projectId="wp1pyf72"
                        dataset="production"
                    />
                </div>
            </article>
        </main>
    );
};
