type HeaderParams = {
    text?: string;
    subtext?: string;
  };
  
export default function Header({text, subtext}: HeaderParams) {
    return <h1> {text} {subtext}</h1>;
  }