# Syncing

Syncing is set to target "File system". This targets a local git repository. Pulling and pushing is done via setting an alias which runs the script "nsync". This avoid having to pay joplin for hosting :)

**Bash**

```shell
alias nsync=". <location of shell script>"
```

**Powershell**

```powershell
Set-Alias -Name nsync -Value <location of powershell script>
```

*In Windows some security settings have to be set to allow executing scripts via alias*



**Todo**

Make a job (chron job for bash, windows?) which detects file changes in the repo, and automatically calls the alias



$$

$$



# Extensions

- Bible Quote

- Pseudocode Support

- Rich Markdown
