import React from "react";

const StartBrowsing = () => {

    return(
        <section className="bg-gray-100 mt-32">
            <div className="flex items-center justify-between max-h-72 max-w-7xl m-auto">
                <div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-4xl font-semibold text-secondary">Browse Our Fashion Paradise!</h2>
                        <span className="text-gray-500 font-medium">Step into a world of style and explore our diverse collection of <br /> clothing categories.</span>
                    </div>

                    <button className="secondary flex text-white items-center px-10 py-3 rounded-md gap-3 mt-9">Start Browsing <img src="/images/Right_Arrow.png" alt="RightArrow" /></button>

                </div>

                <img src="/images/Category_Image.png" alt="Category Image" className="object-scale-down h-72" />

            </div>
        </section>
    )
}

export default StartBrowsing