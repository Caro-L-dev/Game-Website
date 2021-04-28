import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { backgroundColor, primaryTextColor, secondaryColor, secondaryTextColor, tertiaryTextColor } from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';

export const StyledLink = styled(Link) `
    display: inline-block;
    width: 100%;
    background-color: ${secondaryColor};
    border-radius: 4px;
    text-decoration: none;
`

export const Img = styled.img`
   width: 100%; 
`

export const Title = styled.h2`
   margin: 0;
   font-size: 2em;
   font-weight: 510;
   color: ${primaryTextColor};

   @media (min-width: ${breakpoints.tablet}) {
		overflow: hidden;
      text-overflow: ellipsis;
	}
`

export const Details = styled.div`
   padding: 1em;

   @media (min-width: ${breakpoints.tablet}) {
		white-space: nowrap;
	}
`

export const Description = styled.p`
    font-size: 16px;
    color: ${secondaryTextColor};

    @media (min-width: ${breakpoints.tablet}) {
		overflow: hidden;
      text-overflow: ellipsis;
	}
`

export const Genre = styled.p`
   padding: 0.2em 0.4em;
   margin: 0 0.8em 0 0;
   border-radius: 0.4em;
   font-size: 12px;
   font-weight: bold;
   color: ${tertiaryTextColor};
   background-color: ${backgroundColor};
   float: right;
`
