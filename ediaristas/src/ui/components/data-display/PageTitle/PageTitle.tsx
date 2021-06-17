import React from 'react';
import {PageTitleConatiner,PageTitleStyled,PageSubtitleSytled} from './PageTitle.style';

interface PageTitleProps{
  title:string;
  subtitle?:string | JSX.Element;
}


const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleConatiner>
      <PageTitleStyled>
        {props.title}
      </PageTitleStyled>
      <PageSubtitleSytled>
      {props.subtitle}
      </PageSubtitleSytled>
    </PageTitleConatiner>
  )
}

export default PageTitle;