import path from 'node:path';
import { pathToFileURL } from 'node:url';
const skill='/Users/rahul/.codex/plugins/cache/openai-primary-runtime/presentations/26.1020.11618/skills/presentations';
const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const result=await finalizePresentation({
 workspaceDir:'/Users/rahul/Projects/AiWorkshop',
 candidatePath:'/Users/rahul/Projects/AiWorkshop/.build/deck01/candidate.pptx',
 finalPath:'/Users/rahul/Projects/AiWorkshop/output/01-AI-Context.pptx',
 pythonExecutable:'/Users/rahul/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3',
 integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),
 layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),
 explicitTotalSlideCount:22,
 requiredNativeTableOwnerSlides:[],
 requiredNativeChartOwnerSlides:[],
 layoutArgs:['--expected-slide-size-emu','24384000,13716000','--validate-bullet-geometry','--validate-heading-fit'],
 fontPolicy:{basis:'design',families:['Arial']},
 verifyArtifactToolImport:true,
 receiptPath:'/Users/rahul/Projects/AiWorkshop/.build/deck01/validation-final.json'
});
console.log(JSON.stringify(result));
