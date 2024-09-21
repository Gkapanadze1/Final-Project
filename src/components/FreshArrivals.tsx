import React from "react";

const FreshArrivals = () => {


    return(
        <section>

            <div className="flex items-center justify-around max-h-100 bg-gray-100">

                <div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-4xl font-semibold text-secondary">Fresh Arrivals Online</h2>
                        <span className="text-gray-500 font-medium">Discover Our Newest Collection Today.</span>
                    </div>

                    <button className="secondary flex text-white items-center px-10 py-3 rounded-md gap-3 mt-9">View Collection <img src="/images/Right_Arrow.png" alt="RightArrow" /></button>
                </div>

                <img src="/images/Hero_Image.png" alt="HeroImage" className="object-scale-down h-96" />

            </div>

            <div className="flex items-center justify-around mt-20">

                <div className="flex flex-col max-w-80 gap-3">

                    <img src="images/Icon_Box2.png" alt="Icon_Box" className="h-12 w-12" />

                    <h4 className="text-secondary font-bold">Free Shipping</h4>
                    <span className="text-gray-600">Upgrade your style today and get FREE shipping on all orders! Don't miss out.</span>

                </div>

                <div className="flex flex-col max-w-80 gap-3">

                    <img src="images/Icon_Box1.png" alt="Icon_Box" className="h-12 w-12" />

                    <h4 className="text-secondary font-bold">Satisfaction Guarantee</h4>
                    <span className="text-gray-600">Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</span>

                </div>

                <div className="flex flex-col max-w-80 gap-3">

                    <img src="images/Icon_Box.png" alt="Icon_Box" className="h-12 w-12" />

                    <h4 className="text-secondary font-bold">Secure Payment</h4>
                    <span className="text-gray-600">Your security is our priority. Your payments are secure with us.</span>

                </div>

            </div>

        </section>
    )
}

export default FreshArrivals