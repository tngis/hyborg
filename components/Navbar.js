import Image from "next/image"
import Link from "next/link"


const handleShowModal = () => {
    props.setShowModal(true);
}

export default function Navbar(props) {
    return (
        <nav className="border-b border-[#1D1D1D] bg-[#0B0B0B] hidden md:block">
            <div className="container mx-auto">
                <div className="flex justify-between py-5 px-8">
                    <Image
                        src='/logo.png'
                        width='150'
                        height='35'
                    />
                    <button onClick={handleShowModal} className="text-white">register</button>
                </div>
            </div>
        </nav >
    )
}