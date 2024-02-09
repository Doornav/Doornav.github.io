import Navbar from './Navbar';
import ImageContainer from './ImageContainer';
import TextElement from './TextElement';




function App() {
  return (
    <body>
      <Navbar></Navbar>
      <div className='flex-container'>
        <ImageContainer></ImageContainer>
      <TextElement
        class="flex"
        title = "Pranav Sathianathan"
        subtitle = "Undergraduate Student"
        bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      </div>
    </body>
    
  );
}

export default App;
