import React from "react";

const About:React.FC = () => {
  return (
    <div className="text-gray-800 p-6 sm:p-12 lg:p-20">
      <div className="max-w-5xl mx-auto">
        {/* CEO Section */}
        <section className="flex flex-col lg:flex-row lg:gap-12 items-center gap-8 mb-16">
          <div className="lg:w-1/2 cursor-pointer">
            <img
              src="/ceoo.jpg"
              alt="CEO Abdoulaye Diallo"
              className="w-full h-[70%] rounded-full hover:shadow-2xl shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our CEO: Abdoulaye Diallo</h2>
            <p className="text-lg leading-relaxed">
              Meet <strong>Mr. Abdoulaye Diallo</strong>, the visionary behind{" "}
              <strong>We Can Solar Ltd.</strong> Born and raised in a vibrant
              community surrounded by natural beauty, Abdoulaye grew up
              witnessing the challenges posed by environmental degradation and
              energy scarcity. With a background in renewable energy engineering
              and a passion for innovation, he founded this company with the
              goal of making sustainable transportation accessible to all.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Mission Statement</h3>
              <p className="text-lg leading-relaxed">
                Empowering communities with sustainable and innovative electric
                mobility solutions, driving the transition to a greener future.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Vision Statement</h3>
              <p className="text-lg leading-relaxed">
                To become the leading provider of affordable, eco-friendly
                electric bikes, shaping a world where clean energy powers every
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About We Can Solar Ltd.</h2>
          <p className="text-lg leading-relaxed">
            At <strong>We Can Solar Ltd.</strong>, we are on a mission to
            revolutionize the transportation industry by harnessing the power of
            solar energy and electric mobility. Established with a vision of
            sustainability, our company is dedicated to producing cutting-edge
            electric bikes that combine performance, affordability, and
            eco-consciousness.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our flagship product, the <strong>WeCan03 Electric Bike</strong>,
            exemplifies our commitment to innovation. Designed for efficiency
            and reliability, the WeCan03 is perfect for daily commuting,
            reducing carbon emissions, and promoting a cleaner, greener
            environment.
          </p>
        </section>

        {/* Product Showcase Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Future Releases</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 cursor-pointer">
              <img
                src="/wecan3.JPG"
                alt="WeCan03 Electric Bike"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed">
                The <strong>WeCan03 Electric Bike</strong> is a testament to our
                dedication to innovation and sustainability. With its
                cutting-edge design, efficiency, and reliability, it’s the
                perfect solution for modern commuters looking to embrace a
                greener future.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

