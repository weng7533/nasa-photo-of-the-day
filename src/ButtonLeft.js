import React from 'react';
import { Button } from 'reactstrap';

const MyButton = (props) => {
    return (
        <div>


            <Button color="danger" onClick={() => console.log('Yes')}>{`<- Last Day`}</Button>{' '}
            <Button color="danger">{`Next Day ->`}</Button>{' '}

        </div>
    );
}

export default MyButton;