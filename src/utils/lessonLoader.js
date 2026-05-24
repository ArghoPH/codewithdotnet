const lessonModules = import.meta.glob('../lessons/**/*.vue')

function removeOrderPrefix(text) {
    return text.replace(/^\d+-/, '')
}

function removeExtension(text) {
    return text.replace(/\.vue$/, '')
}

function formatTitle(text) {
    return removeOrderPrefix(text)
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())
}

export const lessons = Object.keys(lessonModules)
    .sort()
    .map((path, index) => {
        const parts = path.split('/')

        const rawFileName = parts[parts.length - 1]
        const rawFolderName = parts[parts.length - 2]

        const fileName = removeOrderPrefix(removeExtension(rawFileName))
        const folderName = removeOrderPrefix(rawFolderName)

        const slug = fileName
        const title = formatTitle(fileName)
        const category = formatTitle(folderName)

        return {
            id: index + 1,
            title,
            slug,
            category,
            path,
            component: lessonModules[path],
        }
    })

export const courses = Object.values(
    lessons.reduce((groups, lesson) => {
        if (!groups[lesson.category]) {
            groups[lesson.category] = {
                title: lesson.category,
                lessons: [],
            }
        }

        groups[lesson.category].lessons.push(lesson)

        return groups
    }, {})
)