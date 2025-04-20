import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { srcery } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Lorem = () => {

    return ( 

        <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae rerum iste dolores itaque, voluptatum commodi amet, distinctio exercitationem fugiat vero, eligendi omnis quod pariatur. Odit sequi quae sapiente sed aliquid?
        Atque labore itaque officiis dolores accusantium earum ipsum, minima ratione harum inventore doloribus neque ut hic eligendi obcaecati nihil voluptates nesciunt nemo, quis sint consequuntur accusamus rerum! Incidunt, saepe nulla.
        Autem voluptatum inventore neque. Itaque pariatur, porro et doloribus dolore eligendi numquam architecto sunt quod mollitia optio harum ipsam officiis voluptas. Veritatis quod quibusdam ullam rem maxime error rerum repudiandae.
        Quidem deleniti placeat earum tempore minus facilis incidunt, voluptatum obcaecati cupiditate esse officia, reiciendis necessitatibus repellendus eaque neque, est dolorem laborum nemo? Ipsum inventore consequatur labore maxime rem perspiciatis recusandae?
        Pariatur similique a sequi ipsa illo consectetur iure officiis, libero quisquam iste molestias reiciendis. Sunt rem eos distinctio. Rem quas omnis eveniet voluptatum dolorum cumque eaque optio repellat molestiae adipisci?
        Magni ipsam enim ipsa cumque dolor qui minus? Magnam facilis laboriosam dolores. Nisi aliquam expedita magnam fuga voluptatem, consequuntur nihil unde voluptates voluptas ullam assumenda ut numquam ea. Nobis, natus!
        Similique quae illum itaque assumenda explicabo ut, nulla ratione cum asperiores tempora autem quibusdam necessitatibus iusto alias incidunt nobis eveniet consequuntur, magni in. Non optio tempore pariatur, numquam ipsum autem!
        Obcaecati repudiandae praesentium aliquam corporis ratione odio quasi quidem corrupti? Autem, iusto sint praesentium cupiditate veniam ea modi tempore esse, error voluptate eligendi beatae odio quis facilis, fugit consequuntur nulla.
        Autem tempora ea expedita ipsum necessitatibus. Doloremque cupiditate et voluptas dolores necessitatibus veritatis officia aperiam alias aspernatur ea, qui deserunt sequi sapiente quidem voluptatum autem libero. Consectetur at harum recusandae.
        Nesciunt aperiam esse ipsum id ab, obcaecati, exercitationem facilis magnam natus, inventore cum recusandae ut autem est eius optio deserunt amet sit? Rem, consequatur quae! Voluptates adipisci ducimus nesciunt obcaecati!
        </p>
        <br />

    <SyntaxHighlighter language="cpp" style={srcery} showLineNumbers={true}>
    {`// #include <iostream>
using namespace std;

class Car {
private:
    string brand;
    int year;

public:
    // Constructor
    Car(string b, int y) {
        brand = b;
        year = y;
    }

    // Member function to display car details
    void displayInfo() {
        cout << "Brand: " << brand << ", Year: " << year << endl;
    }
};

int main() {
    // Creating objects of Car class
    Car car1("Toyota", 2020);
    Car car2("Ford", 2018);

    // Calling member function
    car1.displayInfo();
    car2.displayInfo();

    return 0;
}`}
    </SyntaxHighlighter>

        <br />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, cum a aliquid eum voluptate deserunt minus sint eaque omnis cupiditate. Maiores veritatis id excepturi laboriosam facilis consequatur cupiditate at doloribus?
        </p>
    </div>
     );
}
 
export default Lorem;