## This Module is an Example Client utilising the PTS-2 TypeScript Library API

### Project Setup
1. Clone the PTS-2 API project repository

    ```git clone https://gitlab.teratotech.com/slurp/hub/forecourt-pts2.git```

2. Create a symlink in the global folder

    ```npm link```

3. Clone the PTS-2 client repository

    ```git clone https://github.com/amirrhkm/node-microcontroller-client.git```

4. Create a symbolic link from globally-installed package

   ```npm link @ronpos-hub/forecourt-pts2```
   
5. Install the dependencies

    ```npm install```

6. Run the client

    ```npx ts-node ./lib/start-client.ts```

### Usage

After running the client, it will initiate the server, and ensure that the PTS-2 controller is ping-ing the server's endpoint. The server will periodically log the chosen pump's status. Then, you will be prompted to enter a command. Enter the number as follows:

0. PumpAuthorize: Authorize the pump, and the simulator will start filling.
1. PumpStop: Stop the pump.
2. PumpSuspend: Suspend the pump.
3. PumpResume: Resume the pump.
4. PumpEmergencyStop: Stop the pump despite the user.

