import css from 'styled-components';

export const Container = css.div`
padding: 20px;
`;

export const Label = css.label`
display: block;
margin-bottom: 20px;

font-size: 14px;
font-weight: 600;
`;

export const Input = css.input`
display: flex;
margin-top: 6px;
padding: 6px;
width: 200px;

border: 1px solid var(--accent-color);
border-radius: 4px;

outline: none;

&:focus {
    border: 1px solid var(--hover-border-color);
}
`;

export const Button = css.button`
padding: 8px 18px;

border: none;
border-radius: 4px;
background-color: var(--button-bg-color);

&:hover, &:focus {
    transform: scale(1.02);
    background-color: var(--accent-color);
}
`;
