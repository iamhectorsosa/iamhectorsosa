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
import { Tooltip, TooltipProvider } from "./ui/Tooltip";

export const TechStack = () => {
  return (
    <TooltipProvider>
      <div className="space-y-4">
        <h4 className="text-xl font-semibold tracking-tight">Languages</h4>
        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-6 flex-wrap text-muted-foreground">
          <Tooltip content="CSS" side="top">
            <SiCss3 />
          </Tooltip>
          <Tooltip content="Sass" side="top">
            <SiSass />
          </Tooltip>
          <Tooltip content="MDX" side="top">
            <SiMdx />
          </Tooltip>
          <Tooltip content="MD" side="top">
            <SiMarkdown />
          </Tooltip>
          <Tooltip content="TypeScript" side="top">
            <SiTypescript />
          </Tooltip>
          <Tooltip content="JavaScript" side="top">
            <SiJavascript />
          </Tooltip>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-xl font-semibold tracking-tight">
          Frameworks, Platforms and Libraries
        </h4>
        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-6 flex-wrap text-muted-foreground">
          <Tooltip content="Apollo GraphQL" side="top">
            <SiApollographql />
          </Tooltip>
          <Tooltip content="Bootstrap" side="top">
            <SiBootstrap />
          </Tooltip>
          <Tooltip content="Chakra UI" side="top">
            <SiChakraui />
          </Tooltip>
          <Tooltip content="Express" side="top">
            <SiExpress />
          </Tooltip>
          <Tooltip content="Framer Motion" side="top">
            <SiFramer />
          </Tooltip>
          <Tooltip content="Jest" side="top">
            <SiJest />
          </Tooltip>
          <Tooltip content="Next" side="top">
            <SiNextdotjs />
          </Tooltip>
          <Tooltip content="NodeJS" side="top">
            <SiNodedotjs />
          </Tooltip>
          <Tooltip content="React" side="top">
            <SiReact />
          </Tooltip>
          <Tooltip content="React Query" side="top">
            <SiReactquery />
          </Tooltip>
          <Tooltip content="React Router" side="top">
            <SiReactrouter />
          </Tooltip>
          <Tooltip content="React Testing Library" side="top">
            <SiTestinglibrary />
          </Tooltip>
          <Tooltip content="Styled Components" side="top">
            <SiStyledcomponents />
          </Tooltip>
          <Tooltip content="TailwindCSS" side="top">
            <SiTailwindcss />
          </Tooltip>
          <Tooltip content="tRPC" side="top">
            <SiTrpc />
          </Tooltip>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-xl font-semibold tracking-tight">
          Hosting/PaaS/SaaS and Databases
        </h4>
        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-6 flex-wrap text-muted-foreground">
          <Tooltip content="Firebase" side="top">
            <SiFirebase />
          </Tooltip>
          <Tooltip content="GitHub" side="top">
            <SiGithub />
          </Tooltip>
          <Tooltip content="MongoDB" side="top">
            <SiMongodb />
          </Tooltip>
          <Tooltip content="Supabase" side="top">
            <SiSupabase />
          </Tooltip>
          <Tooltip content="Vercel" side="top">
            <SiVercel />
          </Tooltip>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-xl font-semibold tracking-tight">Design</h4>
        <div className="[&>svg]:w-9 [&>svg]:h-9 flex gap-6 flex-wrap text-muted-foreground">
          <Tooltip content="Figma" side="top">
            <SiFigma />
          </Tooltip>
          <Tooltip content="Illustrator" side="top">
            <SiAdobeillustrator />
          </Tooltip>
          <Tooltip content="Lightroom" side="top">
            <SiAdobelightroom />
          </Tooltip>
          <Tooltip content="Photoshop" side="top">
            <SiAdobephotoshop />
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
};
