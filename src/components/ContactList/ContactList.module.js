import css from 'styled-components';

export const Container = css.div`
padding: 20px;
`;

export const Item = css.li`
display: flex;
align-items: center;

&:not(:last-child) {
    margin-bottom: 10px;
}
`;

export const Text = css.p`
font-size: 14px;
`;

export const Button = css.button`
padding: 6px 18px;
margin-left: 16px;

font-size: 10px;
`;
