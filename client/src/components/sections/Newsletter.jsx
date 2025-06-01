// Newsletter subscription component
import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            setError("Please enter a valid email address");
            return;
        }

        // In a real application, this would call an API endpoint
        // For now, just simulate a successful subscription
        setSubscribed(true);
        setError("");
        setEmail("");

        // Reset the success message after a few seconds
        setTimeout(() => setSubscribed(false), 5000);
    };
    return (
        <section id="newsletter" className="bg-purple-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Stay Updated
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-purple-100">
                        Subscribe to receive updates on new arrivals and special
                        promotions.
                    </p>

                    <div className="mt-8 max-w-lg mx-auto">
                        <form onSubmit={handleSubmit} className="sm:flex">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                                placeholder="Enter your email"
                            />
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-800 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>

                        {/* Error or success message */}
                        {error && (
                            <p className="mt-3 text-sm text-white bg-red-500 p-2 rounded">
                                {error}
                            </p>
                        )}
                        {subscribed && (
                            <p className="mt-3 text-sm text-white bg-green-600 p-2 rounded">
                                Thank you for subscribing!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
