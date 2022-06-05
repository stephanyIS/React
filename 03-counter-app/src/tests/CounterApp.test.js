import React from 'react';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';


describe('Pruebas sobre el componente CounterApp', ()=>{
   let wrapper = shallow( <CounterApp/>);

    beforeEach( () => {
        wrapper = shallow( <CounterApp/>);
    })

    test('Debe mostrar el <CounterApp/> correctamente', ()=>{ 
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar el valor por defecto de 100', ()=>{
         const wrapper = shallow( 
            <CounterApp 
                value={100}
            />);
         const valor = wrapper.find('h2').text().trim();   
         expect(valor).toBe('100');  
    })

    test('debe de incrementar con el boton +1', ()=>{
        //const bt1 = wrapper.find('button').at(0);
        //console.log( bt1.html());

        wrapper.find('button').at(0).simulate('click');
        const value = wrapper.find('h2').text().trim();
        expect(value).toBe('11');
    })

    test('debe de decrementar con el boton -1', ()=>{
        //const bt1 = wrapper.find('button').at(0);
        //console.log( bt1.html());

        wrapper.find('button').at(2).simulate('click');
        const value = wrapper.find('h2').text().trim();
        expect(value).toBe('9');
    })


    test('debe de colocar el valor por defecto con el btn reset', ()=>{
        //const bt1 = wrapper.find('button').at(0);
        //console.log( bt1.html());

        const wrapper = shallow( <CounterApp value={100} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const value = wrapper.find('h2').text().trim();
        expect(value).toBe('100');
    })
  
})