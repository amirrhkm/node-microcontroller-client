import { Forecourt, PumpAuthorizeData, PumpAuthorizeType } from "@ronpos-hub/forecourt-pts2";
import readline from 'readline';

async function main() {
    const host = "192.168.1.246";
    const port = 54098;
    const forecourt = new Forecourt(host, port);

    await forecourt.start();

    setTimeout(async () => {
        while (true) {
            console.log(await forecourt.pumpGetStatus(2));
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }, 2000);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', async (input) => {
        const button = parseInt(input.trim());

        switch (button) {
            case 0:
                await pumpAuthorize(forecourt);
                break;
            case 1:
                await pumpStop(forecourt);
                break;
            case 2:
                await pumpSuspend(forecourt);
                break;
            case 3:
                await pumpResume(forecourt);
                break;
            case 4:
                await pumpEmergencyStop(forecourt);
                break;
            default:
                console.log('Invalid button number. Please enter a number between 0 and 4.');
        }
    });

    console.log('Enter a button number (0-4):');
}

async function pumpAuthorize(forecourt: Forecourt) {
    const pumpAuthorizeData = new PumpAuthorizeData();
    pumpAuthorizeData.setPump(2);
    pumpAuthorizeData.setNozzle(1);
    pumpAuthorizeData.setType(PumpAuthorizeType.PAT_MODULE);
    pumpAuthorizeData.setDose(10);
    
    await forecourt.pumpAuthorize(pumpAuthorizeData);
    console.log('Pump authorized.');
}

async function pumpStop(forecourt: Forecourt) {
    await forecourt.pumpStop(2);
    console.log('Pump stopped.');
}

async function pumpSuspend(forecourt: Forecourt) {
    await forecourt.pumpSuspend(2);
    console.log('Pump suspended.');
}

async function pumpResume(forecourt: Forecourt) {
    await forecourt.pumpResume(2);
    console.log('Pump resumed.');
}

async function pumpEmergencyStop(forecourt: Forecourt) {
    await forecourt.pumpEmergencyStop(2);
    console.log('Pump emergency stopped.');
}

main();
