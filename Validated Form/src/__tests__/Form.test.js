import Form from "./Form";
import { render, fireEvent, getByRole, cleanup } from '@testing-library/react'
import FormSignup, { validateInput } from "./FormSignup";
import store from './store'
import { createStore } from "redux";
import  fetchReducer from './formfetch'
import FormSuccess from "./FormSuccess";
import { Provider } from "react-redux";



describe("form", () =>{
    test("validate function should pass on correct input", () =>{
        const text= "text@test.com";
        expect(validateInput(text)).toBe(true);
    });

    test("validate function should fail on incorrect input", () =>{
        const text ="text";
        expect(validateInput(text)).not.toBe(true);
    });
  
})
function rendersWithReduxStore(
    FormSignup,
    {initialState, store = createStore(fetchReducer, initialState)}={}
){
    return{
        ...render(<Provider store={store}>{FormSignup}</Provider>),store
    }
}
it("renders with redux store",()=>{
    rendersWithReduxStore(<FormSignup />)
})
test("email input should accept text", ()=>{
    const {getByLabelText} = rendersWithReduxStore(<FormSignup />);
    const emailInput = getByLabelText(/email/i)
    expect(emailInput.value).toMatch("");
    fireEvent.change(emailInput, {target:{value: "testing"}})
    expect(emailInput.value).toMatch("testing");
});


test("form should be in the document", () =>{
    const component= rendersWithReduxStore(<FormSignup />);
    const input = component.getByText(/email/i);
    expect(input).toBeInTheDocument();
});
test("email field should have label", () =>{
    const component= rendersWithReduxStore(<FormSignup />);
    const emailInput = component.getByLabelText(/email/i);
    expect(emailInput.getAttribute("name")).toBe("email");
});

test("should be able to submit form", () =>{
    const mockFn = jest.fn();
    const {getByRole} =rendersWithReduxStore(<FormSignup handleSubmit={mockFn} />);
    const button = getByRole("button");
    fireEvent.submit(button);

    expect(mockFn).toHaveBeenCalledTimes(0);
})
function rendersWithRedux(
    Form,
    {initialState, store = createStore(fetchReducer, initialState)}={}
){
    return{
        ...render(<Provider store={store}>{Form}</Provider>),store
    }
}
it("renders with redux",()=>{
     rendersWithRedux(<Form />)
})
