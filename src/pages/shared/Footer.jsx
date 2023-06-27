
function Footer() {
    return (
        <footer className="bg-gray-200 dark:bg-gray-400 mt-8 py-6">
            <div className="container mx-auto text-center">
                <p className="text-gray-700 dark:text-white">© 2023 Your Name. All rights reserved.</p>
                <div className="flex justify-center mt-4">
                    <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white mx-2">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white mx-2">
                        Terms of Service
                    </a>
                    <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white mx-2">
                        Cookie Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
