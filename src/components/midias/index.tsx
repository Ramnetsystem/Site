import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className="flex space-x-4 mt-6 text-white">
            <a href="https://www.facebook.com/ramautomacao" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/ram.automacao/" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/ram-automa-o-e-controle/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5514997415648" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaWhatsapp className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@ramautomacaoecontrole7425" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaYoutube className="h-5 w-5" />
            </a>
        </div>
    )
}

export default SocialMedia