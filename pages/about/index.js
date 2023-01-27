import Footer from '@/components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function About() {

    const [disableSendBtn, setDisableSendBtn] = useState(true);
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const validate = () => {
        !validEmail.test(email) && email !== "" ? setEmailErr('Invalid email') : setEmailErr('')
    }
    const toggleDisable = () => {
        validEmail.test(email) ? setDisableSendBtn(false) : setDisableSendBtn(true)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const submitEmail = async (e) => {
        e.preventDefault();

        setTimeout(() => {
            setEmail('');
        }, 150);

        const form = {
            email,
        }

        const response = await fetch('../api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const content = await response.json();

    }

    useEffect(() => {
        validate();
        toggleDisable();
    }, [email])

    return (
        <>
            <Head>
                <title>HybOrg</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className='w-full bg-[#0B0B0B] flex flex-col items-center px-6 pb-7'>
                    <div className='mt-[60px] mb-6'>
                        <Image
                            src='/logo.png'
                            width='125'
                            height='35'
                        />
                    </div>
                    <div className='px-3 mb-5'>
                        <h1 className='text-white text-[24px] leading-7 font-bold mb-5'>Амар байна уу?</h1>
                        <h2 className='text-[#AAAAAA] text-[14px] leading-4'>Та Монголын анхны виртуал дээлийн эзэмшигч боллоо. Монгол өв соёлоо шинэчлэн хадгалж үлдсэн таньд баярлалаа.</h2>
                    </div>
                    <div className='relative w-full '>
                        <Image
                            src='/Rectangle-3612.png'
                            width='600'
                            height='600'
                        />
                        <div className='flex gap-2 absolute top-3 left-3 pl-1 py-1 pr-3 rounded-full justify-center items-center bg-white/5'>
                            <Image
                                src='/logo-white.png'
                                width='30'
                                height='30'
                            />
                            <h1 className='text-[16px] font-bold text-white uppercase'>mongol uuj 1</h1>
                        </div>
                        <div className='absolute top-3 right-5 p-2 bg-white/5 rounded-lg'>
                            <Image
                                src='/LucideIcon-2.png'
                                width='24'
                                height='24'
                            />
                        </div>
                    </div>
                    <div className='w-full bg-[#1D1D1D] rounded-b-xl p-5 mb-4'>
                        <p className='text-[#AAAAAA] text-[14px] leading-4'>
                            Биет дээлтэй хослуулан эдлэх гоёлын зориулалттай ууж. Зөв талдаа зөрсөн захтай, наран хормой, хөндлөн ширээстэй бүсэлхий болон гоёлын бүснээс бүтсэн, мөнгөлөг чимэглэл бүхий энгэртэй ууж.
                            <br /><br />
                            Нүүдэлчин түмэн дээлийг хүндэтгэн дээдлэх болсон шалтгаан нь мөнх өвлийг давахад нөмөр нөөлөг болж, ертөнцийн хахир хатууд оюун санааны хүч өгч байсныг билэгдэн хадгалсаар ирсэн. Дээл нь уушги, зүрх, элэг гэх эрүүл мэндийн дотоод эрхтнийг хамгаалагчийн хувьд хэм хэмжээ хязгаар, цадах, нөөлөгдөх, хайрлах гэх утгыг илтгэх билэгддэг хувцас болон хөгжжээ. Иймээс дээлийн зах, өврийг эрх мэдлийн, хормойг хайр энэрлийн, ханцуй ур ухааны билэг тэмдэг хэмээн хэсэгчлэн ёсчлох болсон. Бид дээлийг бэлгэд авбал эн тэнцүү хайрлалцах, түших, нөмөрлөх утга агуулсан бэлэг хэмээн хүндэтгэдэг.
                        </p>
                    </div>
                    <div className='w-full bg-[#1D1D1D] rounded-xl p-5 mb-4'>
                        <h1 className='text-white text-[24px] leading-7 font-bold mb-4'>Хаана ч хамт явах <br /> виртуал өмч</h1>
                        <div className='relative w-full mb-4'>
                            <Image
                                src='/Rectangle-3621.png'
                                width='600'
                                height='600'
                            />
                            <div className='absolute bottom-3 left-3'>
                                <Image
                                    src='/logo-gray.png'
                                    width='58'
                                    height='58'
                                />
                            </div>
                        </div>
                        <p className='text-[#AAAAAA] text-[14px] leading-4'>Та уг бүтээгдэхүүнийг зөвхөн Hyborg tag-н ашиглан өмсөх боломжтой. Уг tag-н тусгай код хадгалж байгаа тул та хүчтэй нугалж гэмтээхгүй байх хэрэгтэй.</p>
                    </div>
                    <div className='w-full bg-[#1D1D1D] rounded-xl p-5 mb-4'>
                        <h1 className='text-white text-[24px] leading-7 font-bold mb-4'>Дээлээрээ хэрхэн гангарах вэ?</h1>
                        <div className='relative w-full mb-4'>
                            <Image
                                src='/Rectangle-3619.png'
                                width='600'
                                height='600'
                            />
                            <div className='absolute bottom-3 left-3'>
                                <Image
                                    src='/Ellipse-2.png'
                                    width='56'
                                    height='56'
                                />
                            </div>
                        </div>
                        <p className='text-[#AAAAAA] text-[14px] leading-4 mb-4'>Та эзэмшиж буй дээлээ өөрийн бие дээрээ өмсөхийн тулд AR технологийг ашиглах хэрэгтэй тул та Snapchat аппликэйшинийг татах шаардлагтай.</p>
                        <Link href="/"><button className='bg-[#CD5152] flex justify-center text-white gap-3 py-3 w-full rounded-2xl'>
                            <Image
                                src='/LucideIcon-1.png'
                                width='24'
                                height='24'
                            /><span className='text-[16px]'>Дээл өмсөх</span>
                        </button>
                        </Link>
                    </div>
                    <div className='w-full bg-[#1D1D1D] rounded-xl p-5 mb-4'>
                        <h1 className='text-white text-[24px] leading-7 font-bold mb-4'>Бүү хоцроорой!</h1>
                        <p className='text-[#AAAAAA] text-[14px] leading-4 mb-4'>Бидний шинэ бүтээгдэхүүнүүдийн мэдээллийг цаг алдалгүй авахыг хүсвэл имэйл хаягаа бидэнд үлдээгээрэй.</p>
                        <div>
                            <input
                                type='text'
                                id='email'
                                name='email'
                                value={email}
                                onChange={onChangeEmail}
                                className={`text-white border rounded-2xl py-3 w-full px-4 bg-inherit placeholder-[#3E3E3E] ${!validEmail.test(email) && email !== '' ?
                                    'border-red-400' : 'border-[#454545]'
                                    }
                                `}
                                placeholder='Имэйл хаяг' />
                            <div className='text-red-400 mt-1'>{emailErr}</div>
                            <button onClick={!disableSendBtn ? submitEmail : null} type='submit' className={`flex justify-center text-white mt-5 gap-3 py-3 w-full duration-150 rounded-2xl ${disableSendBtn
                                ? 'bg-[#CD5152]/30' : 'bg-[#CD5152] active:scale-95'
                                }`}>
                                <span className='text-[16px]'>Илгээх</span>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

