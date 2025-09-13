ExLua Resource
This README provides instructions for setting up the [ExLua] resource in your FiveM server.
Installation

Place the [ExLua] folder in your FiveM server's resources directory:
resources/[ExLua]
Add the following lines to your server.cfg:
```bash
add_ace resource.sup_exec command.stop allow
add_ace resource.sup_exec command.start allow
add_ace resource.sup_exec command.ensure allow
add_ace resource.sup_exec command.restart allow
```

Ensure the resource is loaded by adding:
```bash
ensure exec_lua
ensure sup_exec
```
