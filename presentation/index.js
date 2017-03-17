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
import logo from "./logo";
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
    virtual_dom_abstraction: require("../assets/intro/virtual_dom_abstraction.jpg"),
    lego: require("../assets/intro/lego.jpg"),
    onereturn: require("../assets/intro/one-return.png"),
    lifecycle: require("../assets/intro/lifecycle.png"),
    mike: require("../assets/intro/mike.png"),
    todos: require("../assets/intro/react-todo.gif"),
    input: require("../assets/intro/input-todo.gif"),
    filter: require("../assets/intro/todos-filter.gif"),
    github: require("../assets/intro/github-todos.png"),
    forms: require("../assets/intro/forms.png"),
    smartdumb: require("../assets/intro/smart&dumb.png"),
    smart: require("../assets/intro/smart.png"),
    dumb: require("../assets/intro/dumb.png"),
    devtools: require("../assets/intro/devtools.png")
  },
  native:{
    web: require("../assets/native/web.png"),
    hybrid: require("../assets/native/hybrid.png"),
    native: require("../assets/native/native.png"),
    stats: require("../assets/native/stats.png"),
    solutions: require("../assets/native/solutions.png"),
    divide: require("../assets/native/divide.png"),
    divideChoice: require("../assets/native/divide-choice.png"),
    hybridList: require("../assets/native/hybrid-list.png"),
    crossPlatform: require("../assets/native/crossPlatform.png"),
    jscore: require("../assets/native/jscore.png"),
    debugger: require("../assets/native/native-debugger.png"),
    logo: require("../assets/native/native_logo.png"),
    who: require("../assets/native/who.png"),
    recompile: require("../assets/native/recompile.gif"),
    installation: require("../assets/native/installation.png"),  
    yoga: require("../assets/native/yoga.png"),    
    flexbox: require("../assets/native/flexbox.png"),   
    installTest: require("../assets/native/install-test.png"),   
    todo1: require("../assets/native/todo1.png"), 
    todo2: require("../assets/native/todo2.png"),
  },
  redux: {
    logo: require("../assets/redux/logo.png"),
    flux: require("../assets/redux/flux.png"),
    wichflux: require("../assets/redux/wichflux.png"),
    npmtrends: require("../assets/redux/npm-trends.png"),
    reacteurope: require("../assets/redux/react-europe.png"),
    reduximage: require("../assets/redux/redux-image.png"),
    shema: require("../assets/redux/redux-arch.jpg"),
    devtools: require("../assets/redux/devtools.gif"),
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
                    <div dangerouslySetInnerHTML={{__html: logo}}></div>
                    <Heading fit size={1} >
                      Formation
                    </Heading>
                    <Heading fit caps size={1} textColor="dandelion">
                      React & React Native
                    </Heading>
                  </Slide>
                  <Slide transition={["zoom"]} bgColor="blackcurrant">
                    <ImageSlide title="Présentation"
                      imageSrc={images.intro.mike}
                      imageHeight="493px"
                    />
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
                      source={require("raw-loader!../assets/code/01_hello-node.example")}
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
                    <ImageSlide title="Les Design Patterns"
                      imageSrc={images.intro.lego}
                      imageHeight="405px"
                    />
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
                      source={require("raw-loader!../assets/code/02_hello-react.example")}
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
                      source={require("raw-loader!../assets/code/03_no-templates.example")}
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
                    <ImageSlide subtitle={<span>Typologie d'application</span>}
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
                    source={require("raw-loader!../assets/code/04_jsx.example")}
                    margin="20px auto"
                  />
                  <Heading size={5} textColor="white" textSize="24px">
                    <span>Output compilation</span>
                  </Heading>
                  <CodePane
                    lang="jsx"
                    source={require("raw-loader!../assets/code/05_jsx.output.example")}
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
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white">
                      <span>Create React App</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/06_rca.example")}
                      margin="20px auto"
                    />
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/07_react-start.example")}
                      margin="20px auto"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant" transitionDuration={0}>
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Props = Données reçues par le composant</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/08_react-props.example")}
                      margin="20px auto"
                    />
                    <Heading size={4} textColor="white" textSize="24px">
                      <span>Comme une propriété en js</span>
                    </Heading>
                </Slide>

                <Slide transition={["fade"]}  bgColor="blackcurrant" transitionDuration={0}>
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Validation des props</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/09_validation-props.example")}
                      margin="20px auto"
                    />
                    <Heading size={4} textColor="white" textSize="24px">
                      <span>Comme une propriété en js</span>
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant" transitionDuration={0}>
                    <Heading size={4} textColor="white" textSize="30px" >
                      <span>Props par défault</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/10_validation-props2.example")}
                      margin="20px auto"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant" transitionDuration={0}>
                    <Heading size={4} textColor="white" textSize="30px" >
                      <span>Gestion d'évènements</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/11_event.example")}
                      margin="20px auto"
                    />
                </Slide>

                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Attention !</span>
                    </Heading>
                    <ImageSlide
                      imageSrc={images.intro.onereturn}
                      imageHeight="300px"
                    />
                    <Heading size={4} textColor="white" textSize="24px">
                      <span>La méthode render() d'un composant doit toujours <br />retourner un seul et unique élément !</span>
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Attention !</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/12_event-bind.example")}
                      margin="20px auto"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>This binding</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/13_bind-constructor.example")}
                      margin="20px auto"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>State</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/14_state.example")}
                      margin="20px auto"
                    />
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                   <Heading fit size={6} textColor="white" textSize="32px">
                      Props vs State
                    </Heading>
                    <BlockQuote>
                      <Appear><div>
                        <Quote textColor="white" textSize="32px"><i>“ If a Component needs to alter one of its attributes at some point in time, that attribute should be part of its state, otherwise it should just be a prop for that Component. “</i></Quote>
                        <Cite textColor="dandelion">Try to keep as many of your components as possible stateless. </Cite>
                      </div></Appear>
                    </BlockQuote>
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Stateless component</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/15_stateless.example")}
                      margin="20px auto"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>ClassName</span>
                    </Heading>
                    <CodePane
                      lang="css"
                      source={require("raw-loader!../assets/code/16_helloClassCss.example")}
                      margin="20px auto"
                    />
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/16_helloClassName.example")}
                      margin="20px auto"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>classnames module</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/16_helloClassnames.example")}
                      margin="20px auto"
                    />   
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Resultat</span>
                    </Heading>
                    <CodePane
                      lang="html"
                      source={require("raw-loader!../assets/code/16_renderClassnames.example")}
                      margin="20px auto"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Inline Styles</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/16_inline-style.example")}
                      margin="20px auto"
                    />   
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Resultat</span>
                    </Heading>
                    <CodePane
                      lang="html"
                      source={require("raw-loader!../assets/code/16_InlineStyle.render.example")}
                      margin="20px auto"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Boucles et conditions</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/17_boucles.example")}
                      margin="20px auto"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Composition</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/18_composition.example")}
                      margin="20px auto"
                    />
                </Slide>

                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Cycle de vie d'un composant</span>
                    </Heading>
                    <ImageSlide
                      imageSrc={images.intro.lifecycle}
                      imageHeight="550px"
                    />
                </Slide>

                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Exercice #1</span>
                    </Heading>
                    <ImageSlide
                      imageSrc={images.intro.todos}
                      imageHeight="550px"
                    />
                </Slide>

                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Repo github et correction</span>
                    </Heading>
                     <Link href="https://github.com/kimak/react-todos/compare/master...step1" target="_blank">
                    <ImageSlide
                      imageSrc={images.intro.github}
                      imageHeight="550px"
                    />
                    </Link>
                </Slide>

                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Formulaire simple</span>
                    </Heading>
                     <Link href="https://facebook.github.io/react/docs/forms.html" target="_blank">
                    <ImageSlide
                      imageSrc={images.intro.forms}
                      imageHeight="450px"
                    />
                    </Link>
                    <Heading size={6} textColor="white"  textSize="24px">
                      <div>Input / Textarea / Select</div>
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Controlled Component</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/19_controlled-input.example")}
                      margin="20px auto"
                    />
                    <Heading size={6} textColor="white"  textSize="24px">
                      <div>La valeur peut être changé en js</div>
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Uncontrolled Component</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/20_uncontrolled-input.example")}
                      margin="20px auto"
                    />
                    <Heading size={6} textColor="white" textSize="24px">
                      <div>La valeur ne peut pas être changé en js</div>
                    </Heading>
                </Slide>

                  <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Uncontrolled Component</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/20_uncontrolled-checked.example")}
                      margin="20px auto"
                    />
                    <Heading size={6} textColor="white" textSize="24px">
                      <div>defaultChecked pour les type radio et checkbox</div>
                    </Heading>
                </Slide>


                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Exercice #2</span>
                    </Heading>
                    <ImageSlide
                      imageSrc={images.intro.input}
                      imageHeight="350px"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Séparer l'application en "petits" composants</span>
                    </Heading>
                    <Link href="https://github.com/kimak/react-todos/compare/step3...step4?diff=split&expand=1&name=step4" target="_blank">
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/21_stateless-item.example")}
                      margin="20px auto"
                    />
                    </Link>
                    <Heading size={6} textColor="white" textSize="24px">
                      <div>80% des composants peuvent être "stateless"</div>
                    </Heading>
                </Slide>

                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Exercice #3</span>
                    </Heading>
                    <ImageSlide
                      imageSrc={images.intro.filter}
                      imageHeight="350px"
                    />
                    <Heading size={6} textColor="white" textSize="24px">
                      <div>git checkout step4</div>
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Aide Exercice #3</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/22_filters-correction.example")}
                      margin="20px auto"
                    />
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <ImageSlide title="Bonne architecture d'application"
                      imageSrc={images.intro.lego}
                      imageHeight="405px"
                    />
                    <Heading size={6} textColor="white" textSize="38px">
                      <div>Forte cohésion + Faible couplage</div>
                    </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <ImageSlide
                      imageSrc={images.intro.smartdumb}
                      imageHeight="250px"
                    />
                    <Heading size={6} textColor="white" textSize="24px">
                      <div>Container & Presentational Components</div>
                    </Heading>
                </Slide>
              <Slide transition={["zoom", "fade"]} bgColor="blackcurrant">
              <Layout>
                <Fill>
                    <Heading size={6} textColor="white" textSize="38px">
                      <div>Container</div>
                    </Heading>
                    <ImageSlide 
                        imageSrc={images.intro.smart}
                        imageHeight="222px"
                      />
                      <Title title=""
                      list={[
                        "How things work",
                        "Provide data",
                        "Manage State",
                        "No Styles"
                      ]}
                    />
                </Fill>
                <Fill>
                  <Heading size={6} textColor="white" textSize="38px">
                      <div>Presentational</div>
                  </Heading>
                  <ImageSlide 
                        imageSrc={images.intro.dumb}
                        imageHeight="222px"
                      />
                  <Title title=""
                      list={[
                        "How things look",
                        "No app dependencies",
                        "Just props and callbacks",
                        "Rarely have own state"
                      ]}
                    />
                </Fill>
              </Layout>
              </Slide>

              <Slide transition={["slide"]} bgColor="blackcurrant">
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>React Developer Tools</span>
                  </Heading>
                  <Link href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en" target="_blank">
                    <ImageSlide
                      imageSrc={images.intro.devtools}
                      imageHeight="450px"
                    />
                  </Link>
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant">
                  <Heading size={4} textColor="dandelion" textSize="38px">
                    <span>React Native</span>
                  </Heading>      
                  <Image
                      src={images.native.logo}
                    />
                  <Heading size={4} textColor="white" textSize="30px">
                    <div>Build Native Mobile Apps<br />using JavaScript and React</div>
                  </Heading>
              </Slide>
              <Slide transition={["zoom"]} bgColor="blackcurrant">
                <Heading size={6} textColor="dandelion" textSize="42px">
                  React Native
                </Heading>
                <Title
                      list={[
                        "Contexte d’application Mobile d’aujourd’hui",
                        "Hybride vs Native",
                        "Introduction à React Native"
                      ]}
                    />
              </Slide>
              <Slide transition={["slide", "fade"]} bgColor="blackcurrant">
                <Heading size={6} textColor="dandelion" textSize="42px">
                  <div style={{marginTop: "20px"}}>Créer un service mobile</div>
                </Heading>
              <Layout>
                <Fill>
                    <Heading size={6} textColor="white" textSize="28px">
                      <div>Site mobile</div>
                    </Heading>
                    <ImageSlide 
                        imageSrc={images.native.web}
                        imageHeight="122px"
                      />
                    <Heading size={4} textColor="white" textSize="12px">
                      <div>Application web<br />accessible depuis une url.</div>
                    </Heading>
                </Fill>
                <Fill>
                  <Heading size={6} textColor="white" textSize="28px">
                      <div>Application Hybride</div>
                  </Heading>
                  <ImageSlide 
                        imageSrc={images.native.hybrid}
                        imageHeight="122px"
                      />
                    <Heading size={4} textColor="white" textSize="12px">
                      <div>Application web<br />installé sur mobile</div>
                    </Heading>
                </Fill>
                <Fill>
                  <Heading size={6} textColor="white" textSize="28px">
                      <div>Application Native</div>
                      <div></div>
                  </Heading>
                  <ImageSlide 
                        imageSrc={images.native.native}
                        imageHeight="122px"
                      />
                    <Heading size={4} textColor="white" textSize="12px">
                      <div>Application installé sur mobile<br />développé dans plusieurs langages.</div>
                    </Heading>
                </Fill>
              </Layout>
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant">
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>Vision du marché mobile mondial</span>
                  </Heading>
                    <ImageSlide
                      imageSrc={images.native.stats}
                      imageHeight="293px"
                    />
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant">
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>Aperçu des solutions hybrides et cross plateformes</span>
                  </Heading>
                    <ImageSlide
                      imageSrc={images.native.solutions}
                      imageHeight="493px"
                    />
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <ImageSlide
                      imageSrc={images.native.divide}
                      imageHeight="550px"
                    />
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <ImageSlide
                      imageSrc={images.native.divideChoice}
                      imageHeight="550px"
                    />
              </Slide>              
              <Slide transition={["fade"]} bgColor="blackcurrant">
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>L'hybride = HTML5 dans un « navigateur » embarqué</span>
                  </Heading>
                    <ImageSlide
                      imageSrc={images.native.hybridList}
                      imageHeight="493px"
                    />
              </Slide>             
              <Slide transition={["fade"]} bgColor="blackcurrant">
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>React Native est différent</span>
                  </Heading>
                    <ImageSlide
                      imageSrc={images.native.crossPlatform}
                      imageHeight="403px"
                    />
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>"Pilote" des composants natifs via JavaScript  </span>
                  </Heading>
              </Slide>         
              <Slide transition={["fade"]} bgColor="blackcurrant">
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>Grâce à JavascriptCore introduis depuis IOS7</span>
                  </Heading>
                  <Link href="http://trac.webkit.org/wiki/JavaScriptCore" target="_blank">
                    <ImageSlide
                      imageSrc={images.native.jscore}
                      imageHeight="403px"
                    />
                  </Link>
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>JavascriptCore est aussi utilisé pour Android</span>
                  </Heading>
              </Slide>        
              <Slide transition={["fade"]} bgColor="blackcurrant">
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>Debugging avec Chrome</span>
                  </Heading>
                    <ImageSlide
                      imageSrc={images.native.debugger}
                      imageHeight="503px"
                    />
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>Fonctionnement via Websocket</span>
                  </Heading>
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Hello React Native</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/23_helloNative.example")}
                      margin="20px auto"
                    />
                    <Appear><Heading size={4} textColor="white" textSize="30px">
                    <span>LEARN ONCE, WRITE ANYWHERE</span>
                  </Heading></Appear>
                </Slide>  
                {/*<Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                        <span>Hello React Native</span>
                    </Heading>
                    <iframe  style={{width: '800px', height: '540px'}} frameBorder="0" allowFullScreen="" src="http://dabbott.github.io/react-native-web-player/#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%0A%20%20AppRegistry%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20View%2C%0A%7D%20from%20'react-native'%0A%0Aclass%20WhyReactNativeIsSoGreat%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbr%2F%20%3EIf%20you%20like%20React%20on%20the%20web%2C%20%3Cbr%2F%20%3Eyou'll%20like%20React%20Native.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbr%2F%20%3EYou%20just%20use%20native%20components%20like%20'View'%20and%20'Text'%2C%3Cbr%2F%20%3E%0A%20%20%20%20%20%20%20%20%20%20instead%20of%20web%20components%20like%3Cbr%2F%20%3E%20'div'%20and%20'span'.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0AAppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20WhyReactNativeIsSoGreat)%0A"></iframe>                                     
                </Slide>*/}
                <Slide transition={["fade"]} bgColor="blackcurrant">
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>Mise à jour sans compilation</span>
                  </Heading>
                    <ImageSlide
                      imageSrc={images.native.recompile}
                      imageHeight="253px"
                    />
                  <Heading size={4} textColor="white" textSize="30px">
                    <span>Gain de temps</span>
                  </Heading>
              </Slide>   
                <Slide transition={["fade"]} bgColor="blackcurrant">
                      <Heading size={4} textColor="white" textSize="30px">
                        <span>Native Modules: Possibilité de coder en natif</span>
                      </Heading>
                      <CodePane
                        lang="jsx"
                        source={require("raw-loader!../assets/code/24_nativeCode.example")}
                        margin="20px auto"
                      />
                      <Appear><Heading size={4} textColor="white" textSize="30px">
                      <span>Objective-C, Java, Swift</span>
                    </Heading></Appear>
                  </Slide>  
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <ImageSlide title={<span>Applis utilisant<span style={{ color: dandelion }}> React Native</span></span>}
                      subtitle={<CustomLink href="https://facebook.github.io/react-native/showcase.html">Et bien d'autres...</CustomLink>}
                      imageSrc={images.native.who}
                      imageHeight="393px"
                    />
                </Slide>
                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                        <span>Installation</span>
                    </Heading>
                  <CustomLink href="https://facebook.github.io/react-native/docs/getting-started.html">
                    <ImageSlide
                        imageSrc={images.native.installation}
                        imageHeight="453px"
                      />
                    </CustomLink>
                </Slide>  
                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                        <span>Run your app</span>
                    </Heading>
                  <CustomLink href="https://facebook.github.io/react-native/docs/getting-started.html#testing-your-react-native-installation">
                    <ImageSlide
                        imageSrc={images.native.installTest}
                        imageHeight="453px"
                      />
                    </CustomLink>
                </Slide>  
                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                        <span>View component</span>
                    </Heading>
                    <iframe  style={{width: '800px', height: '540px'}} frameBorder="0" allowFullScreen="" src="http://cdn.rawgit.com/dabbott/react-native-web-player/gh-v1.8.1/index.html#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%20AppRegistry%2C%20View%2C%20StyleSheet%20%7D%20from%20'react-native'%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20width%3A%20200%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20backgroundColor%3A%20'skyblue'%2C%0A%20%20%20%20borderWidth%3A%202%2C%0A%20%20%20%20borderColor%3A%20'steelblue'%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%7D%2C%0A%7D)%0A%0AAppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A&amp;width=260&amp;scale=0.75&amp;fullscreen=true&amp;styles=%7B%22tab%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%7D%2C%22header%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22headerText%22%3A%7B%22color%22%3A%22%23AAA%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22transpilerHeader%22%3A%7B%22backgroundColor%22%3A%22rgb(240%2C240%2C240)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22transpilerHeaderText%22%3A%7B%22color%22%3A%22%23888%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22tabText%22%3A%7B%22color%22%3A%22%23AAA%22%7D%2C%22tabTextActive%22%3A%7B%22color%22%3A%22%23000%22%7D%7D&amp;panes=%5B%22editor%22%2C%22player%22%5D"></iframe>                    
                </Slide>
                 <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                        <CustomLink href="https://facebook.github.io/react-native/docs/stylesheet.html"><span>Stylesheet</span></CustomLink>
                    </Heading>
                    <iframe  style={{width: '800px', height: '540px'}} frameBorder="0" allowFullScreen="" src="https://facebook.github.io/react-native/docs/stylesheet.html"></iframe>                    
                </Slide>
                
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>React Native Layout</span>
                    </Heading>
                    <CustomLink href="https://facebook.github.io/yoga">
                    <ImageSlide
                        imageSrc={images.native.yoga}
                        imageHeight="453px"
                      />
                    </CustomLink>
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Vous connaissez Flexbox ?</span>
                    </Heading>
                </Slide>
                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                        <span>Flexbox guide</span>
                    </Heading>       
                  <CustomLink href="https://css-tricks.com/snippets/css/a-guide-to-flexbox">
                    <ImageSlide
                        imageSrc={images.native.flexbox}
                        imageHeight="453px"
                      />
                    </CustomLink>             
                </Slide>
                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                        <span>Flexbox React Native</span>
                    </Heading>
                    <iframe  style={{width: '800px', height: '540px'}} frameBorder="0" allowFullScreen="" src="http://cdn.rawgit.com/dabbott/react-native-web-player/gh-v1.8.1/index.html#files=%5B%5B%22index.js%22%2C%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%5Cnimport%20%7B%20AppRegistry%2C%20View%2C%20StyleSheet%20%7D%20from%20'react-native'%5Cn%5Cnimport%20Toggle%20from%20'.%2FToggle'%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20flexDirection%3A%20'row'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20%7BflexDirection%2C%20alignItems%2C%20justifyContent%7D%20%3D%20this.state%5Cn%20%20%20%20const%20layoutStyle%20%3D%20%7BflexDirection%2C%20justifyContent%2C%20alignItems%7D%5Cn%5Cn%20%20%20%20const%20primaryAxis%20%3D%20flexDirection%20%3D%3D%3D%20'row'%20%3F%20'Horizontal'%20%3A%20'Vertical'%5Cn%20%20%20%20const%20secondaryAxis%20%3D%20flexDirection%20%3D%3D%3D%20'row'%20%3F%20'Vertical'%20%3A%20'Horizontal'%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CToggle%5Cn%20%20%20%20%20%20%20%20%20%20label%3D%7B'Primary%20axis%20(flexDirection)'%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BflexDirection%7D%5Cn%20%20%20%20%20%20%20%20%20%20options%3D%7B%5B'row'%2C%20'column'%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20onChange%3D%7B(option)%20%3D%3E%20this.setState(%7BflexDirection%3A%20option%7D)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CToggle%5Cn%20%20%20%20%20%20%20%20%20%20label%3D%7BprimaryAxis%20%2B%20'%20distribution%20(justifyContent)'%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BjustifyContent%7D%5Cn%20%20%20%20%20%20%20%20%20%20options%3D%7B%5B'flex-start'%2C%20'center'%2C%20'flex-end'%2C%20'space-around'%2C%20'space-between'%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20onChange%3D%7B(option)%20%3D%3E%20this.setState(%7BjustifyContent%3A%20option%7D)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CToggle%5Cn%20%20%20%20%20%20%20%20%20%20label%3D%7BsecondaryAxis%20%2B%20'%20alignment%20(alignItems)'%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BalignItems%7D%5Cn%20%20%20%20%20%20%20%20%20%20options%3D%7B%5B'flex-start'%2C%20'center'%2C%20'flex-end'%2C%20'stretch'%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20onChange%3D%7B(option)%20%3D%3E%20this.setState(%7BalignItems%3A%20option%7D)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.layout%2C%20layoutStyle%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%7D%2C%5Cn%20%20layout%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20backgroundColor%3A%20'rgba(0%2C0%2C0%2C0.05)'%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20padding%3A%2025%2C%5Cn%20%20%20%20backgroundColor%3A%20'steelblue'%2C%5Cn%20%20%20%20margin%3A%205%2C%5Cn%20%20%7D%2C%5Cn%7D)%5Cn%5CnAppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%5Cn%22%5D%2C%5B%22Toggle.js%22%2C%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%5Cnimport%20%7B%20AppRegistry%2C%20View%2C%20Text%2C%20TouchableOpacity%2C%20StyleSheet%20%7D%20from%20'react-native'%5Cn%5Cnexport%20default%20class%20Toggle%20extends%20Component%20%7B%5Cn%5Cn%20%20onPress%20%3D%20(option)%20%3D%3E%20%7B%5Cn%20%20%20%20const%20%7BonChange%7D%20%3D%20this.props%5Cn%5Cn%20%20%20%20onChange(option)%5Cn%20%20%7D%5Cn%5Cn%20%20renderOption%20%3D%20(option)%20%3D%3E%20%7B%5Cn%20%20%20%20const%20%7Bvalue%2C%20options%7D%20%3D%20this.props%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.option%2C%20option%20%3D%3D%3D%20value%20%26%26%20styles.activeOption%5D%7D%5Cn%20%20%20%20%20%20%20%20onPress%3D%7Bthis.onPress.bind(this%2C%20option)%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%7Boption%7D%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20)%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20%7Blabel%2C%20options%7D%20%3D%20this.props%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.text%2C%20styles.label%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%7Blabel%7D%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.optionsContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%7Boptions.map(this.renderOption)%7D%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20'column'%2C%5Cn%20%20%20%20paddingBottom%3A%2020%2C%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20padding%3A%204%2C%5Cn%20%20%7D%2C%5Cn%20%20optionsContainer%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20'row'%2C%5Cn%20%20%20%20flexWrap%3A%20'wrap'%5Cn%20%20%7D%2C%5Cn%20%20option%3A%20%7B%5Cn%20%20%20%20padding%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20'whitesmoke'%2C%5Cn%20%20%7D%2C%5Cn%20%20activeOption%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'skyblue'%2C%5Cn%20%20%7D%2C%5Cn%7D)%5Cn%22%5D%5D&width=260&scale=0.75&fullscreen=true&styles=%7B%22tab%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%7D%2C%22header%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22headerText%22%3A%7B%22color%22%3A%22%23AAA%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22transpilerHeader%22%3A%7B%22backgroundColor%22%3A%22rgb(240%2C240%2C240)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22transpilerHeaderText%22%3A%7B%22color%22%3A%22%23888%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22tabText%22%3A%7B%22color%22%3A%22%23AAA%22%7D%2C%22tabTextActive%22%3A%7B%22color%22%3A%22%23000%22%7D%7D&panes=%5B%22editor%22%2C%22player%22%5D"></iframe>                    
                   <Heading size={4} textColor="white" textSize="14px">
                        <span>Flexbox works the same way in React Native as it does in CSS on the web, with a few exceptions. <br />The defaults are different, with flexDirection defaulting to column instead of row,<br />and the flex parameter only supporting a single number.</span>
                    </Heading>
                </Slide>
                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">                        
                      <CustomLink href="https://facebook.github.io/react-native/docs/text.html">
                        <span>Text component</span>
                      </CustomLink>  
                    </Heading>
                    <iframe  style={{width: '800px', height: '540px'}} frameBorder="0" allowFullScreen="" src="http://cdn.rawgit.com/dabbott/react-native-web-player/gh-v1.8.1/index.html#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%20AppRegistry%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EHello!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20'whitesmoke'%2C%0A%20%20%20%20color%3A%20'%234A90E2'%2C%0A%20%20%20%20fontSize%3A%2024%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%7D%2C%0A%7D)%0A%0AAppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A&width=260&scale=0.75&fullscreen=true&styles=%7B%22tab%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%7D%2C%22header%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22headerText%22%3A%7B%22color%22%3A%22%23AAA%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22transpilerHeader%22%3A%7B%22backgroundColor%22%3A%22rgb(240%2C240%2C240)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22transpilerHeaderText%22%3A%7B%22color%22%3A%22%23888%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22tabText%22%3A%7B%22color%22%3A%22%23AAA%22%7D%2C%22tabTextActive%22%3A%7B%22color%22%3A%22%23000%22%7D%7D&panes=%5B%22editor%22%2C%22player%22%5D"></iframe>                    
                </Slide>
                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                      <CustomLink href="https://facebook.github.io/react-native/docs/image.html">
                        <span>Image component</span>
                      </CustomLink>  
                    </Heading>
                    <iframe  style={{width: '800px', height: '540px'}} frameBorder="0" allowFullScreen="" src="http://cdn.rawgit.com/dabbott/react-native-web-player/gh-v1.8.1/index.html#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%20AppRegistry%2C%20Image%2C%20StyleSheet%20%7D%20from%20'react-native'%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.image%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7Buri%3A%20'http%3A%2F%2Fwww.reactnativeexpress.com%2Flogo.png'%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20image%3A%20%7B%0A%20%20%20%20width%3A%20200%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%7D%2C%0A%7D)%0A%0AAppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A&width=260&scale=0.75&fullscreen=true&styles=%7B%22tab%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%7D%2C%22header%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22headerText%22%3A%7B%22color%22%3A%22%23AAA%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22transpilerHeader%22%3A%7B%22backgroundColor%22%3A%22rgb(240%2C240%2C240)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22transpilerHeaderText%22%3A%7B%22color%22%3A%22%23888%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22tabText%22%3A%7B%22color%22%3A%22%23AAA%22%7D%2C%22tabTextActive%22%3A%7B%22color%22%3A%22%23000%22%7D%7D&panes=%5B%22editor%22%2C%22player%22%5D"></iframe>                    
                </Slide>
                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                      <CustomLink href="https://facebook.github.io/react-native/docs/scrollview.html">
                        <span>ScrollView component</span>
                      </CustomLink>  
                    </Heading>
                    <iframe  style={{width: '800px', height: '540px'}} frameBorder="0" allowFullScreen="" src="http://cdn.rawgit.com/dabbott/react-native-web-player/gh-v1.8.1/index.html#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%20AppRegistry%2C%20ScrollView%2C%20View%2C%20StyleSheet%20%7D%20from%20'react-native'%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CScrollView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.boxLarge%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CScrollView%20horizontal%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.boxSmall%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.boxSmall%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.boxSmall%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.boxLarge%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.boxSmall%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.boxLarge%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%20%20boxSmall%3A%20%7B%0A%20%20%20%20width%3A%20200%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20marginBottom%3A%2010%2C%0A%20%20%20%20marginRight%3A%2010%2C%0A%20%20%20%20backgroundColor%3A%20'skyblue'%2C%0A%20%20%7D%2C%0A%20%20boxLarge%3A%20%7B%0A%20%20%20%20width%3A%20300%2C%0A%20%20%20%20height%3A%20300%2C%0A%20%20%20%20marginBottom%3A%2010%2C%0A%20%20%20%20marginRight%3A%2010%2C%0A%20%20%20%20backgroundColor%3A%20'steelblue'%2C%0A%20%20%7D%2C%0A%7D)%0A%0AAppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A&width=260&scale=0.75&fullscreen=true&styles=%7B%22tab%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%7D%2C%22header%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22headerText%22%3A%7B%22color%22%3A%22%23AAA%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22transpilerHeader%22%3A%7B%22backgroundColor%22%3A%22rgb(240%2C240%2C240)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22transpilerHeaderText%22%3A%7B%22color%22%3A%22%23888%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22tabText%22%3A%7B%22color%22%3A%22%23AAA%22%7D%2C%22tabTextActive%22%3A%7B%22color%22%3A%22%23000%22%7D%7D&panes=%5B%22editor%22%2C%22player%22%5D"></iframe>                    
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                      <CustomLink href="https://facebook.github.io/react-native/docs/listview.html">
                        <span>ListView component</span>
                      </CustomLink>  
                    </Heading>
                    <iframe  style={{width: '800px', height: '540px'}} frameBorder="0" allowFullScreen="" src="http://cdn.rawgit.com/dabbott/react-native-web-player/gh-v1.8.1/index.html#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%20AppRegistry%2C%20ListView%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%0A%0A%2F%2F%20Row%20data%20(hard-coded)%0Aconst%20rows%20%3D%20%7B%0A%20%20'Basic%20Components'%3A%20%5B%0A%20%20%20%20%7Bid%3A%200%2C%20text%3A%20'View'%7D%2C%0A%20%20%20%20%7Bid%3A%201%2C%20text%3A%20'Text'%7D%2C%0A%20%20%20%20%7Bid%3A%202%2C%20text%3A%20'Image'%7D%2C%0A%20%20%5D%2C%0A%20%20'List%20Components'%3A%20%5B%0A%20%20%20%20%7Bid%3A%203%2C%20text%3A%20'ScrollView'%7D%2C%0A%20%20%20%20%7Bid%3A%204%2C%20text%3A%20'ListView'%7D%2C%0A%20%20%5D%2C%0A%7D%0A%0A%2F%2F%20Row%20and%20section%20comparison%20functions%0Aconst%20rowHasChanged%20%3D%20(r1%2C%20r2)%20%3D%3E%20r1.id%20!%3D%3D%20r2.id%0Aconst%20sectionHeaderHasChanged%20%3D%20(s1%2C%20s2)%20%3D%3E%20s1%20!%3D%3D%20s2%0A%0A%2F%2F%20DataSource%20template%20object%0Aconst%20ds%20%3D%20new%20ListView.DataSource(%7BrowHasChanged%2C%20sectionHeaderHasChanged%7D)%0A%0Aclass%20App%20extends%20Component%20%7B%0A%0A%20%20state%20%3D%20%7B%0A%20%20%20%20dataSource%3A%20ds.cloneWithRowsAndSections(rows)%0A%20%20%7D%0A%0A%20%20renderRow%20%3D%20(rowData%2C%20sectionId)%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.row%7D%3E%0A%20%20%20%20%20%20%20%20%7BrowData.text%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20renderSectionHeader%20%3D%20(sectionRows%2C%20sectionId)%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.header%7D%3E%0A%20%20%20%20%20%20%20%20%7BsectionId%7D%20(%7BsectionRows.length%7D)%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CListView%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.container%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bthis.state.dataSource%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7Bthis.renderRow%7D%0A%20%20%20%20%20%20%20%20renderSectionHeader%3D%7Bthis.renderSectionHeader%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%20%20row%3A%20%7B%0A%20%20%20%20padding%3A%2015%2C%0A%20%20%20%20marginBottom%3A%205%2C%0A%20%20%20%20backgroundColor%3A%20'skyblue'%2C%0A%20%20%7D%2C%0A%20%20header%3A%20%7B%0A%20%20%20%20padding%3A%2015%2C%0A%20%20%20%20marginBottom%3A%205%2C%0A%20%20%20%20backgroundColor%3A%20'steelblue'%2C%0A%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%7D%2C%0A%7D)%0A%0AAppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A&width=260&scale=0.75&fullscreen=true&styles=%7B%22tab%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%7D%2C%22header%22%3A%7B%22backgroundColor%22%3A%22rgb(250%2C250%2C250)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22headerText%22%3A%7B%22color%22%3A%22%23AAA%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22transpilerHeader%22%3A%7B%22backgroundColor%22%3A%22rgb(240%2C240%2C240)%22%2C%22boxShadow%22%3A%22rgba(0%2C%200%2C%200%2C%200.2)%200px%201px%201px%22%2C%22zIndex%22%3A10%7D%2C%22transpilerHeaderText%22%3A%7B%22color%22%3A%22%23888%22%2C%22fontWeight%22%3A%22normal%22%7D%2C%22tabText%22%3A%7B%22color%22%3A%22%23AAA%22%7D%2C%22tabTextActive%22%3A%7B%22color%22%3A%22%23000%22%7D%7D&panes=%5B%22editor%22%2C%22player%22%5D"></iframe>                    
                </Slide>

                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                      <CustomLink href="https://facebook.github.io/react-native/docs/handling-touches.html">
                        <span>TouchableHighlight component</span>
                      </CustomLink>  
                    </Heading>
                    <iframe  style={{width: '800px', height: '540px'}} frameBorder="0" allowFullScreen="" src="https://facebook.github.io/react-native/docs/handling-touches.html"></iframe>                    
                </Slide>

                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Exercice #1</span>
                    </Heading>
                    <ImageSlide
                      imageSrc={images.native.todo1}
                      imageHeight="550px"
                    />
                </Slide>
                
                <Slide transition={["fade"]} bgColor="blackcurrant">
                   <Heading size={4} textColor="white" textSize="30px">
                      <CustomLink href="https://facebook.github.io/react-native/docs/textinput.html">
                        <span>TextInput component</span>
                      </CustomLink>  
                    </Heading>
                    <iframe  style={{width: '800px', height: '540px'}} frameBorder="0" allowFullScreen="" src="http://cdn.rawgit.com/dabbott/react-native-web-player/gh-v1.2.6/index.html#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20AppRegistry%2C%20TextInput%20%7D%20from%20'react-native'%3B%0A%0Aclass%20UselessTextInput%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7B%20text%3A%20'Useless%20Placeholder'%20%7D%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20style%3D%7B%7Bheight%3A%2040%2C%20borderColor%3A%20'gray'%2C%20borderWidth%3A%201%7D%7D%0A%20%20%20%20%20%20%20%20onChangeText%3D%7B(text)%20%3D%3E%20this.setState(%7Btext%7D)%7D%0A%20%20%20%20%20%20%20%20value%3D%7Bthis.state.text%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0A%2F%2F%20App%20registration%20and%20rendering%0AAppRegistry.registerComponent('AwesomeProject'%2C%20()%20%3D%3E%20UselessTextInput)%3B&assetRoot=https%3A%2F%2Ffacebook.github.io%2Freact-native"></iframe>                    
                </Slide>

                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Exercice #2</span>
                    </Heading>
                    <ImageSlide
                      imageSrc={images.native.todo2}
                      imageHeight="550px"
                    />
                </Slide>              
                <Slide transition={["slide"]} bgColor="blackcurrant">
                    <Heading fit size={1} >
                      <span style={{ color: dandelion }}>React</span> est le V de<span style={{opacity: 0.5}}> M</span>V<span style={{opacity: 0.5}}>C</span>
                    </Heading>
                    <Appear>
                      <Heading size={4} textColor="white" textSize="30px">
                      <div>Comment on fait pour le reste ?</div>
                      </Heading>
                    </Appear>
                </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant">
                  <Heading size={4} textColor="dandelion" textSize="38px">
                    <span>Flux: architecture proposé par Facebook</span>
                  </Heading>      
                    <Image
                        src={images.redux.flux}
                        height="250px"
                      />
                  <Heading size={4} textColor="white" textSize="30px">
                    <div>Un design pattern basé sur Store, Action et dispatcher</div>
                  </Heading>
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant"> 
                  <Heading size={4} textColor="white" textSize="38px">
                    <span>2014</span>
                  </Heading>   
                  <CustomLink href="https://github.com/kriasoft/react-starter-kit/issues/22">
                    <Image
                        src={images.redux.wichflux}
                        height="400px"
                      />
                  </CustomLink>  
                  <Heading size={4} textColor="dandelion" textSize="38px">
                    <span>quelle librairie doit on utiliser...</span>
                  </Heading>     
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant"> 
                  <Heading size={4} textColor="white" textSize="38px">
                    <span>React Europe 2015</span>
                  </Heading>   
                  <CustomLink href="https://2015.react-europe.org/#schedule">
                  <Image
                      src={images.redux.reacteurope}
                      height="150px"
                    />
                  </CustomLink>  
                  <Heading size={4} textColor="dandelion" textSize="38px">
                    <span>Dan Abramov met tout le monde d'accord</span>
                  </Heading>     
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant"> 
                  <Heading size={4} textColor="white" textSize="38px">
                    <span>2016</span>
                  </Heading>   
                  <CustomLink href="http://www.npmtrends.com/redux-vs-reflux-vs-flummox-vs-alt-vs-flux">
                  <Image
                      src={images.redux.npmtrends}
                      height="400px"
                    />
                  </CustomLink>  
                  <Heading size={4} textColor="dandelion" textSize="38px">
                    <span>Redux</span>
                  </Heading>     
              </Slide>
                <Slide transition={["fade"]} bgColor="blackcurrant">
                  <Heading size={4} textColor="dandelion" textSize="38px">
                    <span>Redux</span>
                  </Heading>      
                  <Image
                      src={images.redux.logo}
                      imageHeight="10px"
                    />
                  <Heading size={4} textColor="white" textSize="30px">
                    <div>Redux is a predictable state container<br />for JavaScript apps.</div>
                  </Heading>
              </Slide>
              <Slide transition={["zoom"]} bgColor="blackcurrant">
                <ImageSlide title="Redux"
                  imageSrc={images.redux.reduximage}
                  imageHeight="493px"
                />
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Core concept</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/01_reduxCore.example")}
                      margin="20px auto"
                    />
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Your app’s state is described as a plain object.</span>
                    </Heading>
              </Slide>  
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>To change something in the state</span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/02_reduxAction.example")}
                      margin="20px auto"
                    />
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>you need to dispatch actions.</span>
                    </Heading>
              </Slide> 
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>State and actions are managed together<br />by a function called a <span style={{ color: dandelion }}>reducer</span>. </span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/03_reduxReducer.example")}
                      margin="20px auto"
                    />
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Example: todos <span style={{ color: dandelion }}>Reducer</span></span>
                    </Heading>
              </Slide> 
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>The Filter <span style={{ color: dandelion }}>Reducer</span></span>
                    </Heading>     
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/04_reduxFilter.example")}
                      margin="20px auto"
                    />               
                    <Heading size={4} textColor="white" textSize="22px">
                      <span>It would be hard to write one function for a big app,<br />so we write smaller functions managing parts of the state</span>
                    </Heading>
              </Slide> 
              <Slide transition={["fade"]} bgColor="blackcurrant">                    
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Another reducer manages the complete state <br />of our app by calling those two  <span style={{ color: dandelion }}>reducers</span></span>
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/05_mainReducer.example")}
                      margin="20px auto"
                    />
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Todos App <span style={{ color: dandelion }}>Reducer</span></span>
                    </Heading>
              </Slide> 
              <Slide transition={["zoom"]} bgColor="blackcurrant">
                    <Title title={<span><span style={{ color: dandelion }}>Redux</span> Three Principles</span>}
                      list={[
                        "Single source of truth",
                        "State is read-only",
                        "Changes are made with functions (Reducer)"
                      ]}
                    />
              </Slide>
              <Slide transition={["zoom"]} bgColor="blackcurrant">
                <ImageSlide title="Architecture"
                  imageSrc={images.redux.shema}
                  imageHeight="493px"
                />
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>let store = createStore()</span>
                    </Heading>     
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/06_createStore.example")}
                      margin="20px auto"
                    />          
              </Slide> 
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>store.dispatch()</span>
                    </Heading>     
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/07_storeDispatch.example")}
                      margin="20px auto"
                    />          
              </Slide> 
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>store.getState()</span>
                    </Heading>     
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/08_getState.example")}
                      margin="20px auto"
                    />          
              </Slide> 
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>React + Redux</span>
                    </Heading>        
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/09_react-redux.example")}
                      margin="20px auto"
                    />      
              </Slide> 
              <Slide transition={["zoom"]} bgColor="blackcurrant">

                <CustomLink href="http://extension.remotedev.io/#installation">
                <ImageSlide title="Redux devtools"
                  imageSrc={images.redux.devtools}
                  imageHeight="493px"
                />
                </CustomLink>
              </Slide>
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span style={{ color: dandelion }}> > Let's go step by step !</span>
                      <Title
                          list={[
                            "npm install redux --save-dev",
                            "npm install react-redux --save-dev",
                          ]}
                        />
                    </Heading>      
              </Slide> 
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Step #1: src/App.js</span>
                    </Heading>        
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/10_pratique#1.example")}
                      margin="20px auto"
                    />      
              </Slide> 
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Step #2: src/store.js</span>
                    </Heading>        
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/11_pratique#2.example")}
                      margin="20px auto"
                    />      
              </Slide> 
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Step #3: src/reducers/todos.js</span>
                    </Heading>        
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/12_pratique#3.example")}
                      margin="20px auto"
                    />      
              </Slide> 
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Step #4: src/containers/Todos.js</span>
                    </Heading>        
                    <CodePane
                      lang="jsx"
                      source={require("raw-loader!../assets/code/redux/13_pratique#4.example")}
                      margin="20px auto"
                    />      
              </Slide> 
              <Slide transition={["fade"]} bgColor="blackcurrant">
                    <Heading size={4} textColor="white" textSize="30px">
                      <span>Step #5: src/containers/Todo.js</span>
                    </Heading>    
                    <Title
                          title="?"
                          list={[
                            "A vous de jouer :)",
                          ]}
                        />
              </Slide> 
        </Deck>
      </Spectacle>
    );
  }
}