// ...existing code...
import React, { useState } from 'react';
import Image from 'next/image';
import Blob1 from '/public/sponsors/hero-blob-sponsor.png';
import Blob2 from '/public/sponsors/hero-blob-sponsor-bottom.png';
import weeks from './Education/weeks';

export default function Education() {

    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (weekId) => {
        setOpenDropdown(openDropdown === weekId ? null : weekId);
    };

    return (
        <div className="education-container">
            <Image className="absolute max-w-[500px] md:right-0 top-0 md:w-[31%] w-[45%] right-[-10%]" src={Blob1} alt="decorative blob top" />
            <h1 className="education-header gradient-text">{' < Education /> '}</h1>

            <div className="weeks-container">
                {weeks.map((week) => (
                    <div key={week.id} className="week-panel">
                        <img src={week.logo} className="week-logo" alt={`${week.title} logo`} />
                        <h2 className="week-title">{week.title}</h2>

                        {/* always render dropdown element and toggle "is-open" class so CSS can animate */}
                        <div
                          id={`links-${week.id}`}
                          className={`links-dropdown ${openDropdown === week.id ? 'is-open' : ''}`}
                          aria-hidden={openDropdown !== week.id}
                        >
                            <p className="week-intro">{week.intro}</p>
                            <ul className="week-links">
                                {week.links?.map((link) => (
                                    <li key={link.url}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className="toggle-dropdown-btn"
                            onClick={() => toggleDropdown(week.id)}
                            aria-expanded={openDropdown === week.id}
                        >
                            {openDropdown === week.id ? ' Show Less ▲' : 'Show More ▼'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
