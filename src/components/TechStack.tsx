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
import { ProseH4 } from "./ui/Typography";

export const TechStack = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <ProseH4>Languages</ProseH4>
        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-y-4 gap-x-6 flex-wrap text-muted-foreground">
          <SiCss3 />
          <SiSass />
          <SiMdx />
          <SiMarkdown />
          <SiTypescript />
          <SiJavascript />
        </div>
      </div>
      <div className="space-y-4">
        <ProseH4>Frameworks, Platforms and Libraries</ProseH4>
        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-y-4 gap-x-6 flex-wrap text-muted-foreground">
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
        <ProseH4>Hosting/PaaS/SaaS and Databases</ProseH4>

        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-y-4 gap-x-6 flex-wrap text-muted-foreground">
          <SiFirebase />
          <SiGithub />
          <SiMongodb />
          <SiSupabase />
          <SiVercel />
        </div>
      </div>
      <div className="space-y-4">
        <ProseH4> Design</ProseH4>
        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-y-4 gap-x-6 flex-wrap text-muted-foreground">
          <SiFigma />
          <SiAdobeillustrator />
          <SiAdobelightroom />
          <SiAdobephotoshop />
        </div>
      </div>
    </div>
  );
};
