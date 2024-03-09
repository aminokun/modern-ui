import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogos = ({ className }) => {
    return (
        <div className={`${className} `}>
            <h5 className="tagline mb-6 text-center text-n-1/50">
                Helping People create beautiful content at
            </h5>
            <ul className="flex">
                {companyLogos.map((logo, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-center flex-1 h-[8.5rem]"
                    >
                        <img
                            width={134}
                            height={28}
                            src={logo}
                            alt="company logo's"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompanyLogos