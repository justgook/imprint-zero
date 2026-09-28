export default function configure({ registerStatus }) {
    for (const status of ["outdated", "stage-1", "stage-2", "stage-3"]) {
        registerStatus(status)
    }
}
