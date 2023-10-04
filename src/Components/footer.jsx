//import React from "react";
//import styled from "styled-components";
//import { FaGithub } from "react-icons/fa";
//import { useLocation } from "react-router-dom";
//import Routes from '../src/App.jsx'
//import "../App.css";




// const FooterWrapper = styled.footer`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   width: 100%;
//   padding: 1rem 0;
//   font-size: 2rem;
// `;
// const GithubLink = styled.a`
//   display: flex;
//   margin-left: 1rem;
//   color: ${({ theme }) => theme.colors.dark};
//   font-size: 2rem;
//   transition: color 0.15s ease-in-out;

//   &:hover {
//     transform: scale(1.2);
//   }
// `;
// const ImageUrl = styled.img`
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     z-index: -100;
//  `;

// export default function Footer() {
//     const location = useLocation();
  
//     return (
//       <FooterWrapper>
//         Copyright © 2023 kristinap
//         <GithubLink
//           href="https://github.com/KristPS"
//           target="_blank"
//           rel="noopener"
//         >
//           <FaGithub />
//         </GithubLink>
//         {location.pathname !== routes.PRODUCTS && (
//           <ImageUrl src={backgroundImageUrl} alt="background image" />
//         )}
//       </FooterWrapper>
//     );
//   }
