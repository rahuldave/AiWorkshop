import path from 'node:path';
import { pathToFileURL } from 'node:url';
const skill='/Users/rahul/.codex/plugins/cache/openai-primary-runtime/presentations/26.1020.11618/skills/presentations';
const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
process.env.RUNTIME_NODE_MODULES ??= '/Users/rahul/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const result=await finalizePresentation({
 workspaceDir:'/Users/rahul/Projects/AiWorkshop',
 candidatePath:new URL('./candidate.pptx', import.meta.url).pathname,
 finalPath:new URL('../../output/04-AI-Agents.pptx', import.meta.url).pathname,
 pythonExecutable:'/Users/rahul/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3',
 integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),
 layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),
 explicitTotalSlideCount:16,
 requiredNativeTableOwnerSlides:[5,7,9,12],
 requiredNativeChartOwnerSlides:[],
 layoutArgs:['--expected-slide-size-emu','24384000,13716000','--validate-bullet-geometry','--validate-heading-fit','--require-native-table-slide','5','--require-native-table-slide','7','--require-native-table-slide','9','--require-native-table-slide','12'],
 fontPolicy:{basis:'design',families:['Arial']},
 verifyArtifactToolImport:true,
 receiptPath:new URL('./validation-final.json', import.meta.url).pathname
});
console.log(JSON.stringify({finalPath:result.finalPath,sha256:result.finalSha256,slides:result.firstPartyImport.slideCount,layoutFindings:result.presentationLayout.findingCount}));
