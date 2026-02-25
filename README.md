# 🏠 homelab

<div align="center">
  <p><em>My home Kubernetes cluster running on Talos Linux, managed with GitOps</em></p>

[![Uptime](https://img.shields.io/endpoint?url=https://kromgo.siggerzz.io/cluster_uptime_days&style=for-the-badge&label=Uptime)](https://kromgo.siggerzz.io)
[![Nodes](https://img.shields.io/endpoint?url=https://kromgo.siggerzz.io/cluster_node_count&style=for-the-badge&label=Nodes)](https://kromgo.siggerzz.io)
[![Pods](https://img.shields.io/endpoint?url=https://kromgo.siggerzz.io/cluster_pod_count&style=for-the-badge&label=Pods)](https://kromgo.siggerzz.io)
[![CPU](https://img.shields.io/endpoint?url=https://kromgo.siggerzz.io/cluster_cpu_usage&style=for-the-badge&label=CPU)](https://kromgo.siggerzz.io)
[![Memory](https://img.shields.io/endpoint?url=https://kromgo.siggerzz.io/cluster_memory_usage&style=for-the-badge&label=Memory)](https://kromgo.siggerzz.io)

</div>

## 📋 Overview

A fully automated home lab Kubernetes cluster running media services, home automation, network infrastructure, and observability tools. Everything is managed declaratively through Git using Flux CD.

## 💻 Hardware

| Device               | Num | OS Disk Size | Data Disk Size | RAM  | OS          | Function   |
| -------------------- | --- | ------------ | -------------- | ---- | ----------- | ---------- |
| Lenovo M720q Tiny    | 3   | 256GB SSD    | -              | 16GB | Talos Linux | Kubernetes |
| UniFi UNAS           | 1   | -            | 3x16TB HDD     | -    | UniFi OS    | NAS        |
| UniFi UDM Pro        | 1   | -            | -              | -    | UniFi OS    | Router     |
| UniFi USW Pro 24 PoE | 1   | -            | -              | -    | -           | PoE Switch |

## 🔧 Core Stack

- **OS**: [Talos Linux](https://www.talos.dev/) - Immutable Kubernetes OS
- **GitOps**: [Flux CD](https://fluxcd.io/) - Automated cluster reconciliation
- **CNI**: [Cilium](https://cilium.io/) - eBPF-based networking
- **Storage**: [OpenEBS](https://openebs.io/) - Container-attached storage
- **Ingress**: [Traefik](https://traefik.io/) - Cloud-native reverse proxy (split internal/external instances)
- **Certificates**: [cert-manager](https://cert-manager.io/) - Automated TLS with Let's Encrypt wildcard certificates
- **Secrets**: [External Secrets](https://external-secrets.io/) + [Infisical](https://infisical.com/) - Secret management
- **DNS**: [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) - Network-wide ad blocking

## 📱 Applications

**Media Stack**

- Jellyfin, Radarr, Sonarr, Prowlarr, Sabnzbd, qBittorrent
- Audiobookshelf, Booklore, Shelfmark

**Home Automation**

- Home Assistant

**Network Services**

- UniFi Controller, AdGuard Home, Cloudflare Tunnel

**Observability**

- Grafana, Prometheus, Loki, Alloy

**Dashboard**

- Homepage - Unified dashboard with service integrations

## 🔐 GitOps & Automation

- Automatic reconciliation every 30 minutes
- Encrypted secrets with SOPS (Age) and External Secrets (Infisical)
- Automated dependency updates via [Renovate](https://github.com/renovatebot/renovate)
- Automatic pod restarts on config/secret changes via [Reloader](https://github.com/stakater/Reloader)

## 🙏 Acknowledgments

This cluster setup is inspired by and based on the [onedr0p/cluster-template](https://github.com/onedr0p/cluster-template).
