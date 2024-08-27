"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forecourt_pts2_1 = require("@ronpos-hub/forecourt-pts2");
const readline_1 = __importDefault(require("readline"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const host = "192.168.1.246";
        const port = 54098;
        const forecourt = new forecourt_pts2_1.Forecourt(host, port);
        yield forecourt.start();
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            while (true) {
                console.log(yield forecourt.pumpGetStatus(2));
                yield new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }), 2000);
        const rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (input) => __awaiter(this, void 0, void 0, function* () {
            const button = parseInt(input.trim());
            switch (button) {
                case 0:
                    yield pumpAuthorize(forecourt);
                    break;
                case 1:
                    yield pumpStop(forecourt);
                    break;
                case 2:
                    yield pumpSuspend(forecourt);
                    break;
                case 3:
                    yield pumpResume(forecourt);
                    break;
                case 4:
                    yield pumpEmergencyStop(forecourt);
                    break;
                default:
                    console.log('Invalid button number. Please enter a number between 0 and 4.');
            }
        }));
        console.log('Enter a button number (0-4):');
    });
}
function pumpAuthorize(forecourt) {
    return __awaiter(this, void 0, void 0, function* () {
        const pumpAuthorizeData = new forecourt_pts2_1.PumpAuthorizeData();
        pumpAuthorizeData.setPump(2);
        pumpAuthorizeData.setNozzle(1);
        pumpAuthorizeData.setType(forecourt_pts2_1.PumpAuthorizeType.PAT_MODULE);
        pumpAuthorizeData.setDose(10);
        yield forecourt.pumpAuthorize(pumpAuthorizeData);
        console.log('Pump authorized.');
    });
}
function pumpStop(forecourt) {
    return __awaiter(this, void 0, void 0, function* () {
        yield forecourt.pumpStop(2);
        console.log('Pump stopped.');
    });
}
function pumpSuspend(forecourt) {
    return __awaiter(this, void 0, void 0, function* () {
        yield forecourt.pumpSuspend(2);
        console.log('Pump suspended.');
    });
}
function pumpResume(forecourt) {
    return __awaiter(this, void 0, void 0, function* () {
        yield forecourt.pumpResume(2);
        console.log('Pump resumed.');
    });
}
function pumpEmergencyStop(forecourt) {
    return __awaiter(this, void 0, void 0, function* () {
        yield forecourt.pumpEmergencyStop(2);
        console.log('Pump emergency stopped.');
    });
}
main();
//# sourceMappingURL=start-client.js.map