import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import {
  Experiences,
  Hero,
  NavBar,
  Terminal,
  Quotes,
  SideDrawer,
} from "~/components";
import Game from "~/components/Game";
import nlpjs from "~/bundle";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const terminalInput = formData.get("input");
  return json({ terminalInput });
};

export default function Index() {
  const actionData = useActionData();
  const [nlpResponse, setNlpResponse] = useState();
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  useEffect(() => {
    const setupNLP = async (corpus: any) => {
      const container = nlpjs.containerBootstrap();
      container.register("fs", nlpjs.fs);
      container.use(nlpjs.Nlp);
      container.use(nlpjs.LangEn);
      const nlp = container.get("nlp");
      nlp.settings.autoSave = false;
      await nlp.addCorpus(corpus);
      await nlp.train();
      return nlp;
    };
    const fetchData = async () => {
      const nlp = await setupNLP(
        "https://raw.githubusercontent.com/jesus-seijas-sp/nlpjs-examples/master/01.quickstart/02.filecorpus/corpus-en.json"
      );
      const response = await nlp.process("en", actionData?.terminalInput);

      actionData?.terminalInput && setNlpResponse(response.answer);
    };
    fetchData().catch(console.error);
  }, [actionData]);
  const [showGame, setShowGame] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("customShow");
        } else {
          entry.target.classList.remove("customShow");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".customHidden");
    hiddenElements.forEach((element) => observer.observe(element));
  });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <NavBar />
          <div>
            <div id={"hero"}>
              <Hero setShowGame={setShowGame} showGame={showGame} />
            </div>

            <div id={"experiences"}>
              <Experiences />
            </div>
            <div id={"quotes"}>
              <Quotes />
            </div>
            <div id={"terminal"}>
              <Terminal
                terminalInput={
                  actionData
                    ? [
                        {
                          prefix: "👤",
                          text: actionData.terminalInput,
                        },
                        {
                          prefix: "🤖",
                          text: nlpResponse,
                        },
                      ]
                    : [{ prefix: "~", text: "--help for more" }]
                }
              />
            </div>
            {showGame && <Game />}
          </div>
        </div>
        <SideDrawer />
      </div>
    </div>
  );
}
