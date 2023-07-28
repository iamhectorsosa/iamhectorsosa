import {
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiApollographql,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiJavascript,
  SiJest,
  SiMarkdown,
  SiMdx,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiSass,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTestinglibrary,
  SiTrpc,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const TechStack = () => {
  return (
    <>
      <div className="space-y-4">
        <h4 className="text-xl font-semibold tracking-tight">Languages</h4>
        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-6 flex-wrap text-muted-foreground">
          <SiCss3 />
          <SiSass />
          <SiMdx />
          <SiMarkdown />
          <SiTypescript />
          <SiJavascript />
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-xl font-semibold tracking-tight">
          Frameworks, Platforms and Libraries
        </h4>
        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-6 flex-wrap text-muted-foreground">
          <SiApollographql />
          <SiBootstrap />
          <SiChakraui />
          <SiExpress />
          <SiFramer />
          <SiJest />
          <SiNextdotjs />
          <SiNodedotjs />
          <SiReact />
          <SiReactquery />
          <SiReactrouter />
          <SiTestinglibrary />
          <SiStyledcomponents />
          <SiTailwindcss />
          <SiTrpc />
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-xl font-semibold tracking-tight">
          Hosting/PaaS/SaaS and Databases
        </h4>
        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-6 flex-wrap text-muted-foreground">
          <SiFirebase />
          <SiGithub />
          <SiMongodb />
          <SiSupabase />
          <SiVercel />
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-xl font-semibold tracking-tight">Design</h4>
        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-6 flex-wrap text-muted-foreground">
          <SiFigma />
          <SiAdobeillustrator />
          <SiAdobelightroom />
          <SiAdobephotoshop />
        </div>
      </div>
    </>
  );
};
