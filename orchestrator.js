import  path from 'path';
import  fs from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function executeFlow(data) {
    try {
        let result = data;
        const flowPath = path.join(__dirname, 'config', 'flow.json');
        const flow = JSON.parse(fs.readFileSync(flowPath, 'utf-8'));
        for (const agentName of flow.flow) {
          const {default: agent} = await import(`./agents/${agentName}.js`);
          console.log('agent',agent)
          if (typeof agent.run !== 'function') {
            throw new Error(`Agent ${agentName} must export a 'run' function`);
          }
          result = await agent.run(result);
        }
        return result;
    } catch (error) {
      console.log('KKK',error)
      throw error
    }
}
