// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S,
  ComponentPlayground,
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";


import Title from "./template/title";
import ImageSlide from "./template/image";
import CustomLink from "./template/customLink";
// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  intro:{
    yesterday: require("../assets/intro/web-hier.png"),
    today: require("../assets/intro/web-today.png"),
    spaghetthi: require("../assets/intro/spaghetthi.png"),
    impossible: require("../assets/intro/impossible.png"),
    bubble: require("../assets/intro/react-bubble.png"),
    mvvm: require("../assets/intro/mvvm.png"),
    mvc: require("../assets/intro/mvc.png"),
    complex: require("../assets/intro/front-end-complexity.gif"),
    environnement: require("../assets/intro/environnement.png"),
    webpack: require("../assets/intro/webpack.png"),
    babel: require("../assets/intro/babel.png"),
    sites: require("../assets/intro/sites-react.png"),
    everywhere: require("../assets/intro/everywhere.png"),
    all: require("../assets/intro/react-all.png"),
    virtual: require("../assets/intro/virtual-dom.png"),
    universal: require("../assets/intro/universal.png"),
    seo: require("../assets/intro/seo.png"),
    real: require("../assets/intro/real-dom.png"),
    vdomexplain: require("../assets/intro/vdom-explain.png"),
    domexplain: require("../assets/intro/DOM-explain.png"),
    realdom: require("../assets/intro/real-dom.png"), 
    virtual_dom_abstraction: require("../assets/intro/virtual_dom_abstraction.jpg")
  }
};

preloader(images);

const dandelion = "#FFE163";
const theme = createTheme({
  blackcurrant: "#342E42",
  dandelion,
  primary: "#FFE163",
  secondary: "#000"
}, {
  primary: "Poppins",
  secondary: "Poppins"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="bar">
        <Slide transition={["zoom"]} bgColor="blackcurrant">
                    <Heading fit size={1} >
                      Formation
                    </Heading>
                    <Heading fit caps size={1} textColor="dandelion">
                      React & React Native
                    </Heading>
                  </Slide>
                  <Slide transition={["zoom"]} bgColor="blackcurrant">
                    <Title title="Introduction"
                      list={[
                        "Contexte d’application Web d’aujourd’hui",
                        "Rappel sur l'environnement Javascript",
                        "Pourquoi React est différent ?"
                      ]}
                    />
                  </Slide>
                  <Slide transition={["slide"]} bgColor="blackcurrant">
                    <ImageSlide title="Le web d'hier"
                      imageSrc={images.intro.yesterday}
                      imageHeight="493px"
                      padding="50px"
                    />
                  </Slide>
                  <Slide transition={["slide"]} bgColor="blackcurrant">
                    <ImageSlide title="Le web d'aujourd'hui"
                      imageSrc={images.intro.today}
                      imageHeight="514px"
                      padding="50px"
                    />
                  </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <ImageSlide title={<span>Un constat simple</span>} subtitle={<span>Le web est plus complexe</span>}
                      imageSrc={images.intro.complex}
                      imageHeight="393px"
                    />
                </Slide>
                  <Slide transition={["slide", "spin", "zoom"]} bgColor="blackcurrant">
                    <ImageSlide title="Tu veux faire du code spaghetti ?"
                      imageSrc={images.intro.spaghetthi}
                      imageHeight="556px"
                    />
                </Slide>
                  <Slide transition={["slide", "spin"]} bgColor="blackcurrant">
                    <ImageSlide title="C’est plus possible aujourd’hui."
                      imageSrc={images.intro.impossible}
                      imageHeight="556px"
                    />
                </Slide>
                <Slide transition={["zoom"]} bgColor="blackcurrant">
                  <ImageSlide
                    title="Rappel sur l'environnement"
                    subtitle="Javascript aujourd'hui"
                    imageSrc={images.intro.environnement}
                    imageHeight="456px"
                    padding="50px"
                  />
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Title title="Nodejs en bref"
                      list={[
                        "Du javascript côté serveur",
                        "Construit à partir de V8, le moteur Js de Chrome",
                        "Disponible sur OSX, Windows et linux"
                      ]}
                    />
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white">
                      <span>Hello World</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/hello-node.example")}
                      margin="20px auto"
                    />
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Title title="Node Package Manager"
                      list={[
                        "Des modules publiés par la communauté",
                        "Installé dans le dossier node_modules",
                        "Utilisé pour du js client et/ou serveur"
                      ]}
                    />
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                  <ImageSlide
                    title="Webpack"
                    subtitle="Module bundler"
                    imageSrc={images.intro.webpack}
                    imageHeight="456px"
                    padding="50px"
                  />
                </Slide>
                  <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="dandelion" >
                      ES6
                    </Heading>
                    <BlockQuote>
                        <Quote textColor="white" textSize="28px">“ECMAScript 6 is the newest version of the ECMAScript standard. This standard was ratified in June 2015. ES2015 is a significant update to the language, and the first major update to the language since ES5 was standardized in 2009. Implementation of these features in major JavaScript engines is underway now.” </Quote>
                    </BlockQuote>
                    <CustomLink href="http://kangax.github.io/compat-table/es6/">Tableau de compatibilité</CustomLink>
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                  <ImageSlide
                    title="Babel"
                    subtitle="Transpiler: js -> js"
                    imageSrc={images.intro.babel}
                    imageHeight="456px"
                  />
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Title title="Babel & ES6"
                      list={[
                        <CustomLink href="http://babeljs.io/docs/plugins/transform-es2015-arrow-functions">Arrows functions</CustomLink>,
                        <CustomLink href="https://babeljs.io/learn-es2015/#ecmascript-2015-features-classes">Classes</CustomLink>,
                        <CustomLink href="http://babeljs.io/docs/plugins/transform-es2015-shorthand-properties/">Shorthand properties</CustomLink>,
                        <CustomLink href="http://babeljs.io/docs/plugins/transform-es2015-template-literals/">Template literals</CustomLink>,
                        <CustomLink href="https://babeljs.io/learn-es2015/#ecmascript-2015-features-destructuring">Destructuring</CustomLink>,
                        <CustomLink href="https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread">Default + Rest + Spread</CustomLink>,
                        <CustomLink href="https://babeljs.io/learn-es2015/#ecmascript-2015-features-let-const">Let + Const</CustomLink>,
                        <CustomLink href="https://babeljs.io/learn-es2015/#ecmascript-2015-features-modules">Modules</CustomLink>,
                        <CustomLink href="https://babeljs.io/learn-es2015/#ecmascript-2015-features-promises">Promises</CustomLink>
                      ]}
                    />
                </Slide>
                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading fit size={1} >
                      Qu’est ce qu’une bonne architecture d’application ?
                    </Heading>
                    <BlockQuote>
                        <Appear><Cite textColor="dandelion">Un faible couplage</Cite></Appear>
                        <Appear><Quote textColor="white">Coupling is the manner and degree of interdependence between software modules</Quote></Appear>
                    </BlockQuote>
                </Slide>
                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading fit size={1} >
                      Qu’est ce qu’une bonne architecture d’application ?
                    </Heading>
                    <BlockQuote>
                      <Appear><Cite textColor="dandelion">Une forte cohésion</Cite></Appear>
                      <Appear><Quote textColor="white">Cohesion refers to the degree to which the elements of a module belong together</Quote></Appear>
                    </BlockQuote>
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <ImageSlide title="Model View Controller"
                      subtitle="Design Pattern"
                      imageSrc={images.intro.mvc}
                      imageHeight="405px"
                      padding="50px"
                    />
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <ImageSlide title="Model View View Model"
                      subtitle="Design Pattern"
                      imageSrc={images.intro.mvvm}
                      imageHeight="393px"
                      padding="50px"
                    />
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <ImageSlide title={<span>Ok… et <span style={{ color: dandelion }}>React</span>, encore un nouveau framework, vraiment ?</span>}
                      imageSrc={images.intro.bubble}
                      imageHeight="393px"
                    />
                </Slide>
                <Slide transition={["zoom"]} bgColor="blackcurrant">
                  <Heading fit size={4} textColor="white">
                    <i>Pourquoi <span style={{ color: dandelion }}>React</span></i>
                  </Heading>
                  <Heading fit size={4} textColor="white">
                    <i>est différent ?</i>
                  </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                   <Heading fit size={1} >
                      <span style={{ color: dandelion }}>React</span> n’est pas un framework !
                    </Heading>
                    <BlockQuote>
                      <Appear><div>
                        <Quote textColor="white" textSize="32px"><i>Many people choose to think of React as the V in MVC. We built React to solve one problem: building large applications with data that changes over time.</i></Quote>
                        <Cite textColor="dandelion">React est une librairie</Cite>
                      </div></Appear>
                    </BlockQuote>
                </Slide>
                  <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Title size={6} title={<span><span style={{ color: dandelion }}>React </span>apporte des solutions.<br />
                      Il favorise le <span style={{ color: dandelion }}>faible couplage</span><br /> et une <span style={{ color: dandelion }}>forte cohésion</span>.</span>}
                      list={[
                        <span>Un composant React est <span style={{ color: dandelion }}>réutilisable</span></span>,
                        <span>Un composant React est <span style={{ color: dandelion }}>composable</span></span>,
                        <span>Un composant React est <span style={{ color: dandelion }}>unitairement testable</span></span>
                      ]}
                    />
                  </Slide>
                  <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading textColor="white" textSize="40px">
                      <span>Une idée simple.</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/hello-react.example")}
                      margin="20px auto"
                    />
                    <Heading size={5} textColor="white" textSize="32px">
                      <span>Un composant React réconcilie<br /><span style={{ color: dandelion }}>HTML
        et JavaScript dans un même fichier.</span></span>
                    </Heading>
                  </Slide>
                  <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading fit size={4} textColor="white">
                      <span>En react <span style={{ color: dandelion }}>TOUT </span>est composant</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/no-templates.example")}
                      margin="20px auto"
                    />
                    <Heading fit size={5} textColor="white">
                      <span>Plus de templates Html !</span>
                    </Heading>
                  </Slide>
                  <Slide transition={["slide"]} bgColor="blackcurrant">
                      <Title title={<span>Historique <span style={{ color: dandelion }}>React</span></span>}
                        list={[
                          "Créé en 2011 par Jordan Walke chez Facebook",
                          "Début 2012: Intégré aux Fils d’actualités facebook",
                          "Mi-2012: Déployé sur Instagram.com",
                          "2013, Open sourcé lors de la conférence JSConf Us",
                          "2015, Facebook annonce React Native pour IOS",
                          "2016, La communauté s'aggrandit..."
                        ]}
                      />
                  </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <ImageSlide title={<span>Sites utilisant<span style={{ color: dandelion }}> React</span></span>}
                      subtitle={<CustomLink href="https://github.com/facebook/react/wiki/sites-using-react">Et bien d'autres...</CustomLink>}
                      imageSrc={images.intro.sites}
                      imageHeight="393px"
                    />
                </Slide>
                {/*<Slide transition={["slide"]} bgColor="blackcurrant">
                    <Title title={<span>Les avantages</span>}
                      list={[
                        "Fiabilité",
                        "Scalabilité",
                        "Performance"
                      ]}
                    />
                </Slide>*/}
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <ImageSlide title={<span>Typologie d'application</span>}
                      imageSrc={images.intro.all}
                      imageHeight="393px"
                    />
                </Slide>
                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <ImageSlide
                      imageSrc={images.intro.everywhere}
                      imageHeight="393px"
                    />
                </Slide>

                <Slide transition={["zoom"]} bgColor="blackcurrant">
                  <Heading fit size={4} textColor="white">
                    <i>Fonctionnement de<span style={{ color: dandelion }}> React </span><br />comment ça marche ?</i>
                  </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Title title={<span>React utilise<span style={{ color: dandelion }}> JSX</span></span>}
                      list={[
                        "JSX est une extension à JavaScript",
                        "Sa syntaxe est proche du xml",
                        "Une balise jsx represente un composant react"
                      ]}
                    />
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                  <Heading size={5} textColor="white" textSize="24px">
                    <span>Source jsx</span>
                  </Heading>
                  <CodePane
                    lang="jsx"
                    source={require("raw-loader!../assets/code/jsx.example")}
                    margin="20px auto"
                  />
                  <Heading size={5} textColor="white" textSize="24px">
                    <span>Output compilation</span>
                  </Heading>
                  <CodePane
                    lang="jsx"
                    source={require("raw-loader!../assets/code/jsx.output.example")}
                    margin="20px auto"
                  />
                  <CustomLink href="http://www.phpied.com/files/react/trans.html">JSX playground</CustomLink>
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                  <Heading size={5} textColor="white" textSize="24px">
                    <span>React Virtual DOM</span>
                  </Heading>
                    <ImageSlide
                      imageSrc={images.intro.domexplain}
                      imageHeight="248px"
                    />
                  <Title list={[
                          "Le 'virtual DOM' est une abstraction du DOM.",
                          "Le DOM est lui même une abstraction du document.",
                          "Le 'virtual DOM' est donc une abstraction d'abstraction."
                        ]}
                      />
                </Slide>
                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <ImageSlide
                      imageSrc={images.intro.virtual_dom_abstraction}
                      imageHeight="248px"
                    />
                </Slide>
                {/*<Slide transition={["slide"]} bgColor="blackcurrant">
                    <Title title={<span>React utilise<span style={{ color: dandelion }}> JSX</span></span>}
                      list={[
                        <span style={{ fontSize: "24px" }}>Un composant doit toujours commencer par une majuscule</span>,
                        <span style={{ fontSize: "24px" }}>Cette différence permet de distinguer les composants des balises html</span>,
                        <span style={{ fontSize: "24px" }}>Jsx reste du javascript et donc les mots-clés 'class' et 'for' sont réservés</span>
                      ]}
                    />
                </Slide>*/}
                <Slide transition={["slide"]} bgColor="blackcurrant">
                  <Heading size={5} textColor="white" textSize="24px">
                    <span>React Virtual DOM</span>
                  </Heading>
                    <ImageSlide
                      imageSrc={images.intro.virtual}
                      imageHeight="248px"
                    />
                  <Heading size={5} textColor="white" textSize="24px">
                    <span>DOM du navigateur</span>
                  </Heading>
                    <ImageSlide
                      imageSrc={images.intro.real}
                      imageHeight="130px"
                    />
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Le Virtual DOM permet</span>
                    </Heading>
                    <ImageSlide
                      imageSrc={images.intro.universal}
                      imageHeight="393px"
                    />
                    <Heading size={4} textColor="white" textSize="24px">
                      <span>Un rendu universel<br />client & serveur !</span>
                    </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Le GROS avantage</span>
                    </Heading>
                    <ImageSlide
                      imageSrc={images.intro.seo}
                      imageHeight="300px"
                    />
                    <Heading size={4} textColor="white" textSize="24px">
                      <span>Contenu accessible par les moteurs de recherche</span>
                    </Heading>
                </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
