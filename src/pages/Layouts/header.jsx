import React from "react";
import {Link} from "react-router-dom"

export default function header(){
    const links = [
        {
            name: 'Home',
            link: '/'
        }, 
        {
            name:'login',
            link: '/login',

        },
        {
            name:'register',
            link: '/register'
        }
    ]
    return (
        <>
             <nav
        brand={ <img src="https://media.discordapp.net/attachments/694834406493257762/729067815499202651/matthew_border.png" width="40"
            height="40"
            alt="Brand logo"
          />
        }
        className="py-1"
      >
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
            {links.map(link => {
              return (
                <li>
                  <Link className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400 transition-all duration-200"
                    to={link.link}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      <div
        className="flex p-5 flex-col justify-center text-center"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      >
      </div>
        </>
    )

}