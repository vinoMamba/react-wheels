import renderer from 'react-test-renderer'
import React from "react";
import Button from "../button";

describe('button test', () => {
    it('should be a button', () => {
        const json = renderer.create(<Button/>).toJSON()
        expect(json).toMatchSnapshot()
    });
})