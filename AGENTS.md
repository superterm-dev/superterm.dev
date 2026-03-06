# AGENTS.md

## Installer Script Sync

The landing site serves `https://superterm.dev/get.sh` from `public/get.sh`.

When editing `get.sh`, always sync before commit/deploy:

```bash
./scripts/sync-get.sh
```

Then commit both files:

```bash
git add get.sh public/get.sh
```

Do not deploy changes to `get.sh` alone.
