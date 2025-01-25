import React from 'react';
import { RiFacebookBoxLine, RiInstagramLine, RiTwitterXLine } from 'react-icons/ri';
import Top from './Top';

const Socials = () => {
    return (
        <section className='max-w-7xl mx-auto flex justify-center'>
            <div className="flex flex-col md:flex-row justify-between items-center py-4">
                <div className="flex space-x-6 mb-2">
                    <a href="https://www.facebook.com"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Visit our facebook page'
                    >
                        <RiFacebookBoxLine size={30} />
                    </a>
                    <a href="https://www.x.com"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Visit our X page'
                    >
                        <RiTwitterXLine size={30} />
                    </a>
                    <a href="https://www.instagram.com"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Visit our instagram page'
                    >
                        <RiInstagramLine size={30} />
                    </a>
                </div>
                <div className="text-sm"></div>
            </div>
            <Top />
        </section>
    )
}

export default Socials