// components/CustomComponents.js
import Image from 'next/image';
import Link from 'next/link';
import CodeBlock from './CodeBlock';
import htmlComponents from './htmlComponents';
import InstallationsList from './Installations';
import singleFunctions from './singleFunction';
import FunctionList from './pages/docs/AllFunctions';
const VideoEmbed = ({ src, title }) => (
  <iframe
    width="560"
    height="315"
    src={src}
    title={title}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

const CustomComponents = {
  Image,
  Link,
  VideoEmbed,
  CodeBlock,
  InstallationsList,
  FunctionList,
  ...singleFunctions,
  ...htmlComponents,
};

export default CustomComponents;
