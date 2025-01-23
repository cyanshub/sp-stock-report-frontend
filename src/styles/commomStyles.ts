import styled from "styled-components"
import Link from "next/link"

export const OutlineButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: #4299e1;
  font-weight: bold;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  text-decoration: none;
  border: 1.5px solid #4299e1;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: #4299e1;
    color: #ffffff;
  }
`

