/**
 * Composable with functions for controlling the archive display.
 * @param {*} selectedIndex ref to index of currently selected folder
 * @param {*} isNavigating ref to boolean
 * @param {*} folderCount numeric value
 */
export default function useArchiveControls(selectedIndex, isNavigating, folderCount) {

    // TODO: fix code duplication between nextFolder and prevFolder

    // navigate to the next folder in the archive
    let nextFolder = () => {
        if (!isNavigating.value) {
            // start from start if not navigating
            isNavigating.value = true;
            selectedIndex.value = 0;
            return;
        }
        if (selectedIndex.value < folderCount - 1) {
            selectedIndex.value++;
        } else {
            isNavigating.value = false;
        }
    }

    // navigate to the next folder in the archive
    let prevFolder = () => {
        if (!isNavigating.value) {
            // start from end if not navigating
            isNavigating.value = true;
            selectedIndex.value = folderCount - 1;
            return;
        }
        if (0 < selectedIndex.value) {
            selectedIndex.value--;
        } else {
            isNavigating.value = false;
        }
    }

    return { nextFolder, prevFolder };
}
